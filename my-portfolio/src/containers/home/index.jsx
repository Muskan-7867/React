import React from 'react';
import './style.css'


const Home = () => {
  return (
    <section className='relative bg-custom flex flex-col  mt-[30px] text-[#A52A2A] h-screen justify-center items-center px-4'>
      <div className='flex flex-col justify-center items-center w-full text-center'>
        <h1 className='text-[2rem] sm:text-[3rem] md:text-[4rem] lg:text-[5rem] xl:text-[6rem] overflow-hidden whitespace-nowrap typing-effect leading-tight'>
          Hello, I'm Muskan
          <br />
          Frontend Developer
        </h1>
        {/* Button with hover effect */}
        <button className=' pulse animate-slide-up  mt-8  text-[#A52A2A] semi-bold py-2 px-10 sm:py-3 sm:px-6 md:py-4 md:px-8 lg:py-3 lg:px-20 rounded-lg transition-all duration-300 hover:bg-transparent hover:text-orange-500 border border-[#A52A2A] text-sm sm:text-base md:text-lg lg:text-xl'>
          Hire Me
        </button>
      </div>
    </section>
  );
};

export default Home;
