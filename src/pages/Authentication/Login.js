import React, { useRef, useState } from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import auth from "../../firebase.init";
import useToken from "../../hooks/useToken";
import Loading from "../Shared/Loading";

const Login = () => {
  const emailRef = useRef("");
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);

  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [signInWithGoogle, googleuser, googleloading, googleerror] =
    useSignInWithGoogle(auth);

  const [signInWithEmailAndPassword, emaiuser, emailloading, emailerror] =
    useSignInWithEmailAndPassword(auth);

  const [token] = useToken(googleuser || emaiuser);
  const [forgetEmail, setForgetEmail] = useState("");
  const [forgetPass, setForgetPass] = useState("");

  const googleLogin = () => {
    signInWithGoogle();
  };

  let errorMessage;

  const onSubmit = (data) => {
    console.log(data);
    const email = data.email;
    setForgetEmail(email);
    const pass = data.password;
    setForgetPass(pass)
    signInWithEmailAndPassword(email, pass);
  };

  if (emailerror || googleerror) {
    errorMessage = (
      <p className="text-red-500">
        {emailerror?.message || googleerror?.message}
      </p>
    );
  }

  if (googleloading || emailloading) {
    return <Loading></Loading>;
  }
  if (token) {
    navigate(from);
    Swal.fire({
      icon: "success",
      title: "Cogratulation",
      text: "Log in successfull!",
    });
  }
  const forgetPassword = async () => {
    console.log(forgetEmail);
    await sendPasswordResetEmail(forgetEmail);
    alert("Sent email");
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold">Log in</h2>
          <hr />
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control w-full max-w-xs">
                {/* email */}
                <label className="label">
                  <span className="label-text-alt">Email</span>
                </label>
                <input
                  ref={emailRef}
                  type="email"
                  placeholder="your email"
                  className="input input-bordered w-full max-w-xs"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "email is required",
                    },
                  })}
                />
                <label className="label">
                  {errors.email?.type === "required" && (
                    <span className="label-text-alt text-red-700">
                      {errors.email.message}
                    </span>
                  )}
                  {errors.email?.type === "pattern" && (
                    <span className="label-text-alt text-red-700">
                      {errors.email.message}
                    </span>
                  )}
                </label>
                {/* passsword */}

                <label className="label">
                  <span className="label-text-alt">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="your password"
                  className="input input-bordered w-full max-w-xs"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "password is required",
                    },
                    minLength: {
                      value: 6,
                      message: "must be 6 chareter",
                    },
                  })}
                />
                <label className="label">
                  {errors.password?.type === "required" && (
                    <span className="label-text-alt text-red-700">
                      {errors.password.message}
                    </span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <span className="label-text-alt text-red-700">
                      {errors.password.message}
                    </span>
                  )}
                </label>
              </div>
              {errorMessage}
              <div>
                <p
                  onClick={forgetPassword}
                  className="text-blue-600 underline cursor-pointer"
                >
                  forgetten password?
                </p>
              </div>
              <div className="text-center mt-4">
                <input
                  className="btn btn-primary w-full"
                  type="submit"
                  value="Login"
                />
              </div>
              <p className="my-4">
                <small>
                  new to here?{" "}
                  <Link className="text-blue-600 underline" to="/ragister">
                    create new account?
                  </Link>
                </small>
              </p>
            </form>
          </div>
          <div className="flex flex-col w-full border-opacity-50">
            <div className="divider">OR</div>
            <button onClick={googleLogin} className="btn btn-secondary">
              Google login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
