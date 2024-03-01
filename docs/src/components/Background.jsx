import React from "react";

export const Background = () => {
  return (
    <>
    <div className="w-full h-screen fixed z-[2]">
       <div className=" absolute top-[5%] w-full flex justify-center text-zinc-600  text-xl  font-semibold py-10">
        Documents.
      </div>
      <h1
        className="text-[13vw] top-1/2 left-1/2 -translate-x-[50%]  -translate-y-[50%]  leading-none tracking-tighter
     absolute font-semibold  text-zinc-900 "
      >
        Docs.
      </h1>
      </div>
    </>
  );
};
