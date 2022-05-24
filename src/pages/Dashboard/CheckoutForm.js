import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";

const CheckoutForm = ({ order }) => {
  const total = order?.total;
  const names = order?.name;
  const email = order?.email;
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCarsError] = useState("");
  const [cardSucess, setCarsSuccess] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [trangationId, setTrangationId] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ total }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.clientSecret) {
          setClientSecret(data.clientSecret);
        }
      });
  }, [total]);

  console.log(clientSecret);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setCarsError(error.message);
    } else {
      setCarsError("");
    }

    //confirm card payment
    const { paymentIntent, intentError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: names,
            email: email,
          },
        },
      }
    );
    if (intentError) {
      setCarsError(intentError.message);
      cardSucess("");
    } else {
      setClientSecret("");
      setTrangationId(paymentIntent.id);
      console.log(paymentIntent);
      setCarsSuccess("your payment complete");

      //update server
      const payment = {
          payment: order._id,
          transactionId: paymentIntent.id
      }

      fetch(`http://localhost:5000/order/${order._id}`,{
          method:"PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
  };
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
        <button
          className="btn btn-xs btn-success px-6 mt-6"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-600">{cardError}</p>}
      {cardSucess && (
        <div className="text-green-600">
          <p>{cardSucess}</p>
          <p>{trangationId}</p>
        </div>
      )}
    </div>
  );
};

export default CheckoutForm;
