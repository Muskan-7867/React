import React, { useState } from "react";

export const Login = () => {
  const [user, setuser] = useState("");
  const [password, setpassword] = useState("");
  const [userError, setuserError] = useState(false);
  const [PassError, setPassError] = useState(false);

  function getFormdata(e) {
    if (user === "" || password === "") {
      alert("Please Fill the requirements!!!");
    } else if (user.length < 3 || password.length < 3) {
      alert("Invalid Username and Password!!");
    } else {
      alert("All good!!");
    }
    e.preventDefault();
  }

  function userHandler(e) {
    let item = e.target.value;
    if (item.length < 3) {
      setuserError(true);
    } else {
      setuserError(false);
    }
    setuser(item);
  }

  function PasswordHandler(e) {
    let item = e.target.value;
    if (item.length < 3) {
      setPassError(true);
    } else {
      setPassError(false);
    }
    setpassword(item);
  }
  return (
    <div>
      <div className="bg-slate-800 border border-slate-600 rounded-md p-8 shadow-lg  backdrop-filter backdrop-blur-lg bg-opacity-30">
        <h1 className="text-4xl font-bold text-center mb-6">LOGIN</h1>
        <form action="" onSubmit={getFormdata}>
          <div className="relative my-4">
            <input
              type="text"
              onChange={userHandler}
              className="block w-72 py-2.5 px-0 text-sm  text-white bg-transparent border-0 border-b-2 border-gray-300
                     appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white
                      focus:border-blue-600 peer"
              placeholder=""
            />
            {userError ? <span>User Not Valid</span> : ""}
            <label
              htmlFor=""
              className={`absolute text-sm duration-300 transform top-1/4 ${
                user.length > 0 || userError
                  ? "-translate-y-6 text-gray-400 dark:text-gray-400"
                  : "translate-y-0 text-white"
              }`}
            >
              Username
            </label>
          </div>
          <div className="relative my-4">
            <input
              type="password"
              onChange={PasswordHandler}
              className="block w-72 py-2.5 px-0 text-sm  text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer"
              placeholder=""
            />{" "}
            {PassError ? <span>password Not Valid</span> : ""}
            <label
              htmlFor=""
              className={`absolute text-sm duration-300 transform top-1/4 ${
                password.length > 0 || PassError
                  ? "-translate-y-6 text-blue-600 dark:text-blue-500"
                  : "translate-y-0 text-white"
              }`}
            >
              Your Password
            </label>
          </div>

          <button
            type="submit"
            className="w-full mb-4 text-[18px] rounded bg-blue-500  mt-6 py-2 hover:bg-blue-600  transition-colors duration-300"
          >
            LOGIN
          </button>
        </form>
      </div>
    </div>
  );
};
export default Login;
