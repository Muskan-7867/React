import React, { useRef, useState } from 'react';

const words = `world html css java animal justify car jasmine bike books notes good perfect
 land meals sweet global karan chair glass query twist running landscape`.split(" ");

export const Typingspeed = () => {
  const [userInput, setUserInput] = useState('');
  const typingword = useRef(words);
  const [activeWordIndex, setActiveWordIndex] = useState(4);

  function processInput(value) {
    if (value.endsWith(' ')) {
      setActiveWordIndex(activeWordIndex + 1);
      setUserInput('');
    } else {
      setUserInput(value);
    }
  }

  return (
    <div>
      <h1 className='flex justify-center text-3xl mt-[150px]'>Typing Test</h1><br />
      <p className='text-black ml-[600px] text-xl'>
        {typingword.current.map((word, index) => {
          if (index === activeWordIndex) {
            return <b key={index}>{word}</b>;
          }
          return <span key={index}>{word}</span>;
        })}
      </p>
      <input
        type='text'
        className='border-solid ml-[700px] border-black border-2'
        value={userInput}
        onChange={(e) => processInput(e.target.value)}
      />
    </div>
  );
};

export default Typingspeed;
