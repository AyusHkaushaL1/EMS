import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-br from-blue-200 to-blue-500">
      <div className="backdrop-blur-xl bg-white/30 border border-white/50 shadow-lg rounded-3xl p-10 w-[90%] max-w-md">
        <form
          onSubmit={submitHandler}
          className="flex flex-col gap-4 text-white"
        >
          <h2 className="text-2xl font-semibold text-center text-white">Login</h2>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="placeholder:text-gray-200 bg-white/20 text-white border border-white/30 rounded-xl py-3 px-4 outline-none focus:ring-2 focus:ring-white"
            type="email"
            placeholder="Enter your email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="placeholder:text-gray-200 bg-white/20 text-white border border-white/30 rounded-xl py-3 px-4 outline-none focus:ring-2 focus:ring-white"
            type="password"
            placeholder="Enter your password"
          />
          <button
            type="submit"
            className="bg-white/20 border border-white/40 py-3 px-5 rounded-xl text-white font-medium hover:bg-white/30 transition-all"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
