import React, { useRef } from 'react'
import { Card } from './Card'


export const Forground = () => {
    const ref= useRef(null);
    const data = [
       {description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, magni.",
       filesize:".9mb",
    close:false,
    tag:{isOpen: true,tagTitle:"Download Now",tagColor:"green"},
      },
      {description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, magni.",
      filesize:".9mb",
   close:true,
   tag:{isOpen: true,tagTitle:"Download Now",tagColor:"green"},
     },
     {description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, magni.",
     filesize:".9mb",
  close:true,
  tag:{isOpen: true,tagTitle:"upload Now",tagColor:"blue"},
    },
    ]
  return (
    <div  ref={ref} className=' fixed z-[3] top-0 left-0 w-full h-full  flex gap-10  p-5 flex-wrap'>
    {data.map((item,index)=>(
        <Card data={item} reference={ref}/>
    ))}
     </div>
  )
}
