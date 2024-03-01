import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";;
import { LuDownload } from "react-icons/lu";
import { IoIosClose } from "react-icons/io";
import {motion} from "framer-motion"
export const Card = ({data,reference}) => {
  return (
    <motion.div drag dragConstraints={reference}  whileDrag={{scale:1.1}} dragElastic={.1} className=' relative flex-shrink-0 w-60 h-72  text-white py-10 px-8 rounded-[45px] overflow-hidden bg-zinc-900/90 '>
         <FaRegFileAlt />  
         <p className='text-sm leading-tight mt-5 '>{data.description}</p>
         <div className='footer absolute bottom-0 w-full   left-0 '>
            <div className='flex items-center justify-between  px-8 py-3 mb-3'>
                <h5>{data.filesize}</h5>
                <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center '>
                    {data.close ? <IoIosClose /> : <LuDownload size=".7em" color="#fff" />}
                   
                </span>
            </div>
            {
                data.tag.isOpen ? (
                    <div className={`tag w-full py-4 ${data.tag.tagColor === "blue" ? "bg-blue-600": "bg-green-600"} flex items-center justify-center `}>
                       <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
                </div>
                ) : null
            }
           
         </div>
    </motion.div>
  )
}
