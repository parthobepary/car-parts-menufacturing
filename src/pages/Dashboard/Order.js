import React from "react";
import { useNavigate } from "react-router-dom";

const Order = ({ orders, refetch }) => {
  const { _id, name, productName, quntity, total } = orders;
  const navigate = useNavigate()

  //delete on
  const delteOrder = (id) => {
    fetch(`http://localhost:5000/order/${id}`,{
        method: 'DELETE'
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
      });
  };

  const paymentBtn = () => {

    navigate(`/payment/${_id}`)
  }

  return (
    <div>
      <div className="">
        <p className="py-4 bg-slate-400 mb-3 px-4 rounded-lg">
          {" "}
          <span>User name: {name}</span>
          <span className="mx-4 mb-3">Product name: {productName}</span>
          <span className="mx-4 mb-3">Quantity: {quntity}</span>
          <span>Total: {total}</span>{" "}
          <button
            onClick={() => delteOrder(_id)}
            className="btn btn-xs ml-4 bg-red-600 text-white"
          >
            delete
          </button>
          { total && <button
            onClick={paymentBtn}
            className="btn btn-xs ml-4 bg-red-600 text-white"
          >
            Pay
          </button>}
        </p>
      </div>
    </div>
  );
};

export default Order;
