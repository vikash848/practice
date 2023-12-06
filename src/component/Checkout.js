import React, { useEffect, useState } from "react";
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";

const Checkout = () => {
  const data = [
    { id: 1, quantity: 2 },
    { id: 2, quantity: 1 },
  ];

  const [product, setProduct] = useState({
    name: "React From FB",
    price: 1000,
    productBy: "facebook",
  });

  const handlePayment = (token) => {
    axios
      .post(`http://localhost:5000/payment`, { token, product })
      .then((res) => console.log("response", res))
      .catch((err) => console.log("error", err));
  };

  useEffect(() => {
    axios
      .get('https://ipapi.co/json/')
      .then((response) => {
        console.log("Country: ", response);
      })
      .catch((data, status) => {
        console.log("Request failed data", data, " status ", status);
      });
  });

  console.log(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);
  return (
    <div>
      <h2>Checkout</h2>
      <StripeCheckout
        stripeKey="pk_test_51MNVGdSGUClHIdEpyxMdgBSS3kG7zIiFd8WMNoceSQDGxS5kTE6OXuA4d4OJw9As0kRZkKodAOFmiCNJs2cG0tmg00FXFqGOBP"
        token={handlePayment}
        amount={product.price * 100}
      >
        <button>Pay {product.price}</button>
      </StripeCheckout>
    </div>
  );
};

export default Checkout;
