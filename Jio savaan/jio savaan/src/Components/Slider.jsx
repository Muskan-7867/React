import React, { useRef } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import Albumitem from './Albumitem';

const Slider = ({ data }) => {
    const scrollRef = useRef(null);

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollLeft += 800;
        }
    }

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollLeft -= 800;
        }
    }

    return (
        <div className='flex justify-center items-center gap-2'>
            <MdKeyboardArrowLeft onClick={scrollLeft}
                className="text-3xl text-gray-600 hover:scale-1.25 transition-all duration-500 ease-in-out cursor-pointer hidden lg:block"
            />
            <div className='grid grid-rows-2 grid-flow-col-dense justify-between items-center gap-4 overflow-x-scroll w-full lg:w-[78vw] px-5 scroll-hide'
                ref={scrollRef}>
                {data?.map(album => (
                    <Albumitem key={album.id} {...album} />
                ))}
            </div>
            <MdKeyboardArrowRight onClick={scrollRight}
                className="text-3xl text-gray-600 hover:scale-1.25 transition-all duration-500 ease-in-out cursor-pointer hidden lg:block"
            />
        </div>
    );
};

export default Slider;
