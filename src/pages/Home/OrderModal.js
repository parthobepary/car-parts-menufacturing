import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Modal from "./Modal";

const OrderModal = () => {
  const { id } = useParams();
  const [details, setDetails] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/tools/${id}`)
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
          <label for="my-modal-3" className="btn modal-button btn-primary px-32">
            Purches
          </label>
        </div>
      </div>
      {<Modal name={name} availableQuentity={availableQuentity} perunitPrice={perunitPrice} />}
    </div>
  );
};

export default OrderModal;
