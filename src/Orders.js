import React, { useState, useEffect } from "react";
import { db } from "./firebase";
import { collection, doc, getDocs, query, orderBy } from "firebase/firestore";
import { useStateValue } from "./StateProvider";
import Order from "./Order";
import "./Orders.css";

function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    if (!user) {
      console.log("No user logged in");
      return;
    }

    try {
      const userOrdersRef = collection(
        doc(collection(db, "users"), user.uid),
        "orders"
      );

      const ordersQuery = query(userOrdersRef, orderBy("created", "desc"));
      const querySnapshot = await getDocs(ordersQuery);

      const ordersData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
      }));

      setOrders(ordersData);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  useEffect(() => {
    if (user) {
      fetchOrders();
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <div className="orders">
      <h1>Your Orders</h1>

      <div className="orders__order">
        {orders?.length > 0 ? (
          orders.map((order) => <Order key={order.id} order={order} />)
        ) : (
          <p>You haven't placed any orders yet.</p>
        )}
      </div>
    </div>
  );
}

export default Orders;
