import React from "react";
import { Link } from "react-router-dom";

const Albumitem = ({ name, artists, id, image }) => {
  return (
    <Link to={`/albums/${id}`} className=" w-[160px] max-h-[220px] overflow-y-clip flex  flex-col justify-center items-center gap-3 rounded-lg">
      <img src={image[2].link} alt={name} style={{ width: "100%", height: "auto" }} />
      <div className="text-[13px] w-full flex flex-col justify-center items-center">
        <span className="text-gray-600 font-semibold overflow-x-clip" style={{ fontSize: "14px" }}>{name}</span>
        <p className="text-gray-500 font-thin" style={{ fontSize: "12px" }}>{artists.map((artist) => artist.name).join(", ")}</p>
      </div>
    </Link>
  );
};

export default Albumitem;
