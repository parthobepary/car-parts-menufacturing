import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe("pk_test_51L2u2bAprLf0Lxa0dDQdy5hMoZU9AnteHLP1A2pRyCJsc0VPSJln3psXewkoBB80H3q0X9rxfIpl6DnHpMXVPThz009JM2fJhq");

const Payment = () => {
  const { id } = useParams();
  const [order, setOrder] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/orders/${id}`)
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, [id]);

  console.log(order);
  return (
    <div>
      <div className="w-1/2 mx-auto mt-10">
        <div class="text-center lg:text-left">
          <div class="card bg-base-100 shadow-xl">
            <div class="card-body">
              <h2 class="card-title">Pay for: {order?.productName}</h2>
              <p>Total pay: {order?.total}</p>
            </div>
          </div>
        </div>
        <div class="card flex-shrink-0 shadow-2xl bg-base-100 mt-4">
          <div class="card-body">
            <div>
              <Elements stripe={stripePromise}>
                <CheckoutForm  order={order}/>
              </Elements>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
