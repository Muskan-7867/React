import React from 'react'

export const Volumecontroller = ( {isvolumevisible} ) => {
  return (
    
        <div className={`w-[80px] absolute -rotate-90 bottom-20 -right-3 
        shadow-md px-2 rounded-lg bg-white ${ isvolumevisible ? " " : "hidden"
    }`}>
      <input
        type="range" 
        min={0}
        max={100}
        step="0.1"
        value={0}
        className="text-green-400 h-[5px] range"
      />
    </div>
  )
}