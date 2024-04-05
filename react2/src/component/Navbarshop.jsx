import React from 'react';

export const Navbar = () => {

   

  return (
    <div className='h-screen bg-slate-800 flex flex-col justify-between'>
      <div className='bg-slate-500 h-12 flex items-center justify-between'>
        <h1 className='text-white font-bold text-3xl ml-2 italic'>Shopping APP</h1>

        <ul className="flex ml-4 mr-10">
          <li className='text-white text-xl mr-8 italic'>HOME</li>
          <li className='text-white text-xl mr-8 italic'>PRICE</li>
          <li className='text-white text-xl mr-8 italic'>ABOUT</li>
          <li className='text-white text-xl mr-8 italic'>CARD</li>
        </ul>
      </div>

      <div className='flex flex-col items-center justify-center text-white text-5xl italic h-full'>
        <div>WELCOME TO SHOPPING APP</div>
        
      </div>
    </div>
  );
};

export default Navbar;
