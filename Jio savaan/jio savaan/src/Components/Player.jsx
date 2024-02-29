import React, { useState } from "react";
import { BiRepeat } from 'react-icons/bi';
import { IoMdSkipBackward, IoMdSkipForward } from 'react-icons/io';
import { PiShuffleBold } from 'react-icons/pi';
import { FaPlay, FaPause } from 'react-icons/fa';
import { HiSpeakerWave } from 'react-icons/hi2';
import { LuHardDriveDownload } from 'react-icons/lu';
import { Volumecontroller } from "./Volumecontroller";

export const Player = () => {
  const[isvolumevisible, setisvolumevisible] = useState(false)
  return (
    <div className="fixed bottom-0 right-0 left-0 flex flex-col bg-[#f5f5f5ff]">
      <input
        type="range"
        name="progress"
        id="progress"
        min={0}
        max={100}
        step="0.1"
        className="w-full text-green-400 h-[5px] range"
      />

      <div className="flex justify-between items-center mb-3 px-3">
        <div className="flex justify-start items-center gap-3 lg:w-[30vw]">
          <img
            src="https://c.saavncdn.com/274/Rockstar-2011-50x50.jpg"
            width={55}
            className="rounded-lg"
            alt="Album Cover"
          />
          <div className="hidden lg:block">
            <span>Lorem, ipsum.</span>
            <p className="text-xs text-gray-500">Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      
        <div className="flex text-2xl lg:text-3xl gap-4 lg:gap-6 lg:w-[40vw] justify-center">
          <BiRepeat className="text-gray-400 cursor-pointer" />
          <IoMdSkipBackward className="text-gray-700 hover:text-gray-500 cursor-pointer" />
          <FaPlay className="text-gray-700 hover:text-gray-500 cursor-pointer" />
          <IoMdSkipForward className="text-gray-700 hover:text-gray-500 cursor-pointer" />
          <PiShuffleBold className="text-gray-400 cursor-pointer" />
        </div>

        <div className="flex lg:w-[30vw] justify-end items-center"
         onMouseEnter={()=> setisvolumevisible(true)}
         onMouseOut={()=> setisvolumevisible(false)}>
          <LuHardDriveDownload className="text-gray-700 hover:text-gray-500 cursor-pointer text-2xl lg:text-3xl lg:mr-2" />
          <HiSpeakerWave className="text-gray-700 hover:text-gray-500 cursor-pointer text-2xl lg:text-3xl hidden lg:block" />
          <Volumecontroller  isvolumevisible={isvolumevisible}/>
        </div>
      </div>
    </div>
  );
};