import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState } from "react";

const CheckoutForm = () => {
    const stripe = useStripe();
  const elements = useElements();
  const[cardError, setCarsError] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
          }
      
          const card = elements.getElement(CardElement);
      
          if (card == null) {
            return;
          }
      
          const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card
          });
      
          if (error) {
            setCarsError(error.message)
          } else {
            setCarsError('')
          }
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button className="btn btn-xs btn-success px-6 mt-6" type="submit" disabled={!stripe}>
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-600">{cardError}</p>}
    </div>
  );
};

export default CheckoutForm;
