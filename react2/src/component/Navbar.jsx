import React from 'react';

export const Navbar = () => {
  return (
    <div className=' bg-black h-12 flex items-center justify-between'>
      <h1 className='text-white font-bold text-2xl ml-1'>TODO APP</h1>

      <ul className="flex ml-4">
        <li className="mr-2">
          <a className='text-white' href='#'>HOME</a>
          {/* a tag nhi use krde agge jake pta lgna a tag refresh kr dinda so react da main km aa no refresh Link tag milna agge pr hje nhi o thoda advance aa. good vdea bnaya design nhi vdea o vdea kr , navbar sohna bna , dhn duja chng krna c bch input vla, ema nu el card vich kr  chl dekh li jida sohna lgge jida phila bnaya c oda hi bna di ok mnu lga muk gya hje te pya a */} 
        </li>
        <li className="mr-2">
          <a className='text-white' href='#'>ABOUT</a>
        </li>
        <li className="mr-2">
          <a className='text-white' href='#'>PRICE</a>
        </li>
        <li>
          <a className='text-white' href='#'>STUDY</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
