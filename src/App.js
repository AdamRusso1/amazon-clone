import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import Orders from "./Orders";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import React, { useEffect } from "react";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import "./payment.css";
import Payment from "./payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51S5TAC9C4WoqwayTQB8Vfj362owPKd8rpwBtMoWu2u2bN5VcrnZtxfYVF4geQjwRTtCancGF70eFpH5rof34vaZR00JaIcKXcD"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // Listen for authentication state changes
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      console.log("THE USER IS >>>", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [dispatch]);

  return (
    <Router>
      {/* BEM naming convention */}
      <div className="app">
        <Routes>
          <Route
            path="/Orders"
            element={
              <>
                <Header /> <Orders />
              </>
            }
          />

          <Route path="/login" element={<Login />} />
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          />
          <Route
            path="/payment"
            element={
              <>
                <Header />
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </>
            }
          />
          {/* Default route */}
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
