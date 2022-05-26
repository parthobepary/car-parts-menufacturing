import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Modal from "./Modal";

const OrderModal = () => {
  const { id } = useParams();
  const [details, setDetails] = useState([]);

  useEffect(() => {
    fetch(`https://rocky-fjord-46983.herokuapp.com/tools/${id}`)
      .then((res) => res.json())
      .then((data) => setDetails(data[0]));
  }, [id]);

  const { name, img, discription, availableQuentity, perunitPrice } = details;

  return (
    <div className="my-32 container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center">
        <div className="">
          <img className="w-3/4 text-center rounded-lg" src={img} alt="" />
        </div>
        <div>
          <h1>Product name: {name}</h1>
          <p>{discription}</p>
          <h4>Available product: {availableQuentity}</h4>
          <h4>Per/Price: {perunitPrice}</h4>
          <p className="text-red-600">Minimum order more then 500</p>
          <label
            for="my-modal-3"
            className="btn modal-button btn-primary px-32"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            Purches
          </label>
        </div>
      </div>
      {
        <Modal
          name={name}
          availableQuentity={availableQuentity}
          perunitPrice={perunitPrice}
        />
      }
    </div>
  );
};

export default OrderModal;
