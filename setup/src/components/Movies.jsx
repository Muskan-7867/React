import { Fragment } from "react";
import Data from "./Data";

export const Movies = () => {
  return (
    <>
      {Data.map((data, index) => {
        return (
          <Fragment key={index}>
            <div className="wrapper bg-red-500  ">
              <h1 className="text-bold">movie nae : {data.Title}</h1>
              <h1>actors : {data.Actors}</h1>
            </div>
          </Fragment>
        );
      })}
    </>
  );
};
