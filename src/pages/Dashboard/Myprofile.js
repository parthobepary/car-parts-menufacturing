import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const Myprofile = () => {
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return <Loading></Loading>;
  }
  const { displayName, email, phoneNumber, photoURL } = user;
  console.log(user);
  return (
    <div className="flex justify-center">
      <div className="bg-gray-400 w-2/4 text-center rounded-md p-4">
        <div>
          <img className="rounded-full w-1/2 mx-auto" src={photoURL} alt="" />
        </div>
        <h1 className="mt-4">Name: {displayName}</h1>
        <h4 className="mt-4">Email: {email}</h4>
        <h5>Phone: {phoneNumber? {phoneNumber}.slice(0,4) + "xxxxx" : 'XXXXXXXXXX'}</h5>
        <button className="btn btn-primary px-20 mt-4">Edit</button>
      </div>
    </div>
  );
};

export default Myprofile;
