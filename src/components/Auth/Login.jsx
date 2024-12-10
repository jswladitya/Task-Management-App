import React from "react";
import { useState } from "react";

const Login = ({handleLogin}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password)

    //cleanup
    setEmail("")
    setPassword("")
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 rounded-lg border-emerald-600 p-20">
        <form
          // onSubmit={submitHandler} //cannot use this syntax because we have to prevent default form submit
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col items-center justify-center"
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            type="email"
            placeholder="Enter your email"
            className="border-2 border-emerald-600 rounded-full py-2 px-5 outline-none bg-transparent placeholder:text-gray-400"
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            type="password"
            placeholder="Enter password"
            className="border-2 border-emerald-600 rounded-full py-2 px-5 outline-none bg-transparent placeholder:text-gray-400 mt-3"
          />
          <button className="border-none bg-emerald-600 rounded-full py-2 px-8 text-white outline-none placeholder:text-white mt-7 w-full">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
