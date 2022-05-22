import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const Modal = ({ name }) => {
  console.log(name);
  const [user, loading] = useAuthState(auth);
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <input type="checkbox" id="my-modal-3" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box relative">
          <label
            for="my-modal-3"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div className="bg-gray-500">
            <h3 class="text-lg font-bold text-green-500">
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
                  className="mb-3 input input-bordered w-full text-center"
                  {...register("productName")}
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
                  placeholder="Enter your quantity"
                  className="mb-3 input input-bordered w-full text-center"
                  type="number"
                  {...register("quntity")}
                />
                <br />
                <input
                  className="mb-3 input input-bordered w-full text-center"
                  type=""
                  {...register("total")}
                />
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
