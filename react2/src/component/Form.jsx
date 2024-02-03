import React from "react";

export const Form = () => {
    function getFormdata(e)
    {
      e.preventDefault();

    }
  return (
    <>
      <div className="flex justify-center text-black-700 font-bold text-5xl mt-40 mb-8">
          Create Account
        </div>
         <form onSubmit={getFormdata}  className="flex mb-28 flex-col items-center"> 
          <div className="mb-4">
            <label htmlFor="email" className="mr-2">
              Email:
            </label>
            <input
              type="text"
              className="border border-black-4 rounded p-2 ml-5"
              placeholder="Email"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="mr-2">
              Password:
            </label>
            <input
              type="password"
              className="border border-black-4 rounded p-2"
              placeholder="Password"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="country" className="mr-4">
              Country:
            </label>
            <select className="border border-black-4 rounded p-2 mr-14">
              <option>Select Options</option>
              <option>India</option>
              <option>Australia</option>
            </select>
          </div>

          <button
            type="submit"
            className="bg-black text-white p-2 rounded"
          >
            Submit
          </button>
        </form>
      
    </>
  );
};
