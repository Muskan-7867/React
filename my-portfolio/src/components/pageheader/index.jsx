import React from "react";


const Pageheader = (props) => {
  const { headertext, icon } = props;
  return (
    <section class="text-center mt-16 flex justify-between border-b border-[#A52A2A]  ">
      <h1 class="text-4xl font-bold mb-4 text-[#A52A2A]">{headertext}</h1>
      <span className="p-2 rounded-full text-[#A52A2A]">{icon}</span>
    </section>
  );
};

export default Pageheader;
