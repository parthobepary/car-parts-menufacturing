import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const Modal = () => {
  const [user, loading] = useAuthState(auth);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  if(loading){
      return <Loading />
  }
  console.log(user.displayName);

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
                  className="mb-3 input input-bordered w-full"
                  {...register("name")}
                />
                <br />
                <input
                  className="mb-3 input input-bordered w-full"
                  {...register("email")}
                />
                <br />
                <input
                  className="mb-3 input input-bordered w-full"
                  type="text"
                  {...register("address")}
                />
                <br />
                <input
                  className="mb-3 input input-bordered w-full"
                  type="text"
                  {...register("address")}
                />
                <br />
                <input
                  className="mb-3 input input-bordered w-full"
                  type="number"
                  {...register("quntity")}
                />
                <br />
                <input
                  className="mb-3 input input-bordered w-full"
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
