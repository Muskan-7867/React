import React from 'react';

const Videocard = ({ info }) => {

  function formatNumber(number) {
    if (number >= 1000000) {
      return (number / 1000000).toFixed(0) + "M";
    } else if (number >= 1000) {
      return (number / 1000).toFixed(0) + "k";
    }
    return number;
  }

  if (!info) {
    return null; // Render nothing if info is not available
  }
  const { snippet, statistics } = info;
  const { title, channelTitle, thumbnails } = snippet;
  const { viewCount } = statistics;
  console.log(info)

  return (
    <div className='p-2 m-2 w-72 '>
      <img  className='rounded-lg ' alt='video' src={thumbnails.medium.url} />
      <ul>
        <li className=' py-2 text-semibold line-clamp-2  h-auto max-h-14 overflow-hidden'>{title}</li>
        <li className='text-sm'> {formatNumber(viewCount)}</li>
        <li className='text-sm'>{channelTitle}</li>
      </ul>
    </div>
  );
};

export default Videocard;
