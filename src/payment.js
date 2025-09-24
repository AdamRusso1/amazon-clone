import React, { useState, useEffect } from "react";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link, useNavigate } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { NumericFormat } from "react-number-format";
import { getBasketTotal } from "./reducer";
import axios from "./axios";
import { db } from "./firebase";
import { collection, doc, setDoc, getDoc } from "firebase/firestore";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const navigate = useNavigate();

  const stripe = useStripe();
  const elements = useElements();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    const getClientSecret = async () => {
      try {
        console.log(
          "Requesting client secret for basket total:",
          getBasketTotal(basket) * 100
        );
        const response = await axios({
          method: "post",
          url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
        });
        console.log("Response:", response.data);
        setClientSecret(response.data.clientSecret);
      } catch (error) {
        console.error("Error getting client secret:", error);
        console.error("Error response:", error.response?.data);
        setError("Failed to initialize payment. Please try again.");
      }
    };

    if (basket.length > 0) {
      getClientSecret();
    }
  }, [basket]);

  console.log("THE SECRET IS >>>", clientSecret);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);
    console.log("=== PAYMENT SUBMISSION STARTED ===");
    console.log("User:", user);
    console.log("Basket:", basket);
    console.log("Client Secret:", clientSecret);

    if (!stripe || !elements) {
      console.log("❌ Stripe not loaded");
      setError("Stripe has not loaded properly");
      setProcessing(false);
      return;
    }

    if (!clientSecret) {
      console.log("❌ No client secret");
      setError("Payment setup incomplete. Please try again.");
      setProcessing(false);
      return;
    }

    if (!user) {
      console.log("❌ User not signed in");
      setError("Please sign in to complete your order");
      setProcessing(false);
      return;
    }

    try {
      console.log("🔄 Confirming card payment...");
      const { paymentIntent, error } = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: elements.getElement(CardElement),
          },
        }
      );

      console.log("Payment response:", { paymentIntent, error });

      if (error) {
        console.error("❌ Payment error:", error);
        setError(`Payment failed: ${error.message}`);
        setProcessing(false);
        return;
      }

      if (paymentIntent && paymentIntent.status === "succeeded") {
        try {
          const userOrderRef = doc(
            collection(doc(collection(db, "users"), user.uid), "orders"),
            paymentIntent.id
          );

          await setDoc(userOrderRef, {
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
            userEmail: user.email,
          });

          dispatch({
            type: "EMPTY_BASKET",
          });

          setSucceeded(true);
          setError(null);
          setProcessing(false);
          navigate("/Orders");
        } catch (firestoreError) {
          console.error("Firestore error:", firestoreError);
          setError(
            `Order saved but database update failed: ${firestoreError.message}`
          );
          setProcessing(false);
        }
      } else {
        console.log(
          "❌ Payment not successful. Status:",
          paymentIntent?.status
        );
        setError("Payment was not successful");
        setProcessing(false);
      }
    } catch (error) {
      console.error("❌ Error during payment:", error);
      setError(`Payment failed: ${error.message}`);
      setProcessing(false);
    }
  };

  const handleChange = (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout(
          <Link to="/Checkout"> {basket?.length} items </Link>)
        </h1>
        {/* Payment section - delivery address */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>123 Fake Street</p>
            <p>London</p>
          </div>
        </div>

        {/* Payment section - review items */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {(basket ?? []).map((item) => (
              <CheckoutProduct
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        {/* Payment section - payment method */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Details</h3>
          </div>
          <div className="payment__details">
            {/* Stripe functionality will go here */}
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment__priceContainer">
                <NumericFormat
                  renderText={(value) => (
                    <>
                      <h3>Order Total: {value}</h3>
                    </>
                  )}
                  decimalScale={2}
                  fixedDecimalScale={true}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>processing</p> : "Buy Now"}</span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
