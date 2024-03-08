import React from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import Albumitem from './Albumitem';

const Slider = ({ data }) => {
    const scrollRef = useRef(null);
    const scrollRight = () => {
        scrollRef.current.scrollleft += 800;
    }

  return (
    <div className='flex  justify-center items-center gap-2'>
      <MdKeyboardArrowLeft 
        className="text-3xl text-gray-600 hover:scale-1.25 transition-all duration-500 ease-in-out cursor-pointer hidden lg:block"
      />
      <div className='grid grid-rows-2  grid-flow-col-dense justify-between items-center gap-4 overflow-x-scroll
      w-full  lg:w-[78vw] px-5 scroll-hide'
      ref={scrollRef}>
        {data?.map(album => (
          <Albumitem key={album.id} {...album} />
        ))}
      </div>
      <MdKeyboardArrowRight 
        className="text-3xl text-gray-600 hover:scale-1.25 transition-all duration-500 ease-in-out cursor-pointer hidden lg:block"
      />
    </div>
  );
};

export default Slider;
