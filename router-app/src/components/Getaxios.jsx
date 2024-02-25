import React, { useEffect, useState } from "react";
import axios from "axios";

const baseurl = "https://jsonplaceholder.typicode.com/posts";

export const Getaxios = () => {
  const [mydata, setdata] = useState([]);
  
  useEffect(() => {
    axios.get(baseurl)
      .then((response) => {
        setdata(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  
  return (
    <>
      {mydata.map((item) => {
        const { id, title } = item;
        return (
          <>
            <h1>{id}</h1>
            <h2>{title}</h2>
          </>
        );
      })}
    </>
  );
};

export default Getaxios;
