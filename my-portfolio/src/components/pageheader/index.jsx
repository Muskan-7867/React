import React from "react";
import "./style.css";

const Pageheader = (props) => {
  const { headertext, icon } = props;
  return (
    <section class="text-center mt-16 flex justify-between border-b border-b-orange-[1px] ">
      <h1 class="text-4xl font-bold mb-4 text-orange-500">{headertext}</h1>
      <span className="p-2 rounded-full text-orange-500">{icon}</span>
    </section>
  );
};

export default Pageheader;
