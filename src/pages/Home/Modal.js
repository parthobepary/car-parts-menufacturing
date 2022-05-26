import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const Modal = ({ name, availableQuentity, perunitPrice }) => {
  console.log(perunitPrice);
  const [user, loading] = useAuthState(auth);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    fetch("https://rocky-fjord-46983.herokuapp.com/order", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    Swal.fire({
      icon: 'success',
      title: 'Cogratulation',
      text: 'Successfull your order',
    })
    reset();
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            for="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div className="bg-gray-500">
            <h3 className="text-lg font-bold text-green-500">
              Congratulations ...!
            </h3>
            <div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  value={user?.displayName}
                  className="mb-3 input input-bordered w-full text-center"
                  {...register("name")}
                />
                <br />
                <input
                  value={user?.email}
                  className="mb-3 input input-bordered w-full text-center"
                  {...register("email")}
                />
                <br />
                <input
                  value={name}
                  placeholder="re type product name"
                  className="mb-3 input input-bordered w-full text-center"
                  {...register("productName" ,  { required: true })}
                />
                <br />
                <input
                  placeholder="Addresss"
                  className="mb-3 input input-bordered w-full text-center"
                  type="text"
                  {...register("address")}
                />
                <br />
                <input
                  placeholder="phone"
                  className="mb-3 input input-bordered w-full text-center"
                  type="number"
                  {...register("phone")}
                />
                <br />
                <input
                  value={perunitPrice}
                  className="mb-3 input input-bordered w-full text-center"
                  type="number"
                  {...register("total",  { required: true })}
                />
                <br />
                <input
                  placeholder="product quantity"
                  className="mb-3 input input-bordered w-full text-center"
                  type="number"
                  {...register("quntity", { min: 500, max: availableQuentity })}
                />
                <br />
                {errors.quntity && (
                  <p className="text-red-800 font-bold">
                    minimum order 500 and max order {availableQuentity}
                  </p>
                )}
                <br />
                <input
                  className="mb-3 btn btn-primary btn-outline px-36"
                  type="submit"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
