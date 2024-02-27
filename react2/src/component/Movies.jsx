import { Fragment } from "react";
import Data from "./Data";

export const Movies = () => {
  return (
    <>
      {Data.map((data, index) => {
        return (
          <Fragment key={index}>
            <div className="wrapper bg-red-500  mt-5 rounded-xl p-6 w-fit ">
             
              <h1 > <span className="font-bold">movie name</span> : {data.Title}</h1>
              <h1>actors : {data.Actors}</h1>
            </div>
          </Fragment>
        );
      })}
    </>
  );
};
