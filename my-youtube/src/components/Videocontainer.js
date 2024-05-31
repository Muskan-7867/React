import React, { useEffect, useState } from 'react';
import { youtube_video_api } from '../utils/constants';
import Videocard from './Videocard';

const Videocontainer = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    try {
      const response = await fetch(youtube_video_api);
      const json = await response.json();
      setVideos(json.items);
    } catch (error) {
      console.error('Error fetching videos:', error);
    } finally {
      setLoading(false);
    }
  };



  return (
    <div className='flex flex-wrap'>
      
        {videos.map(video=> <Videocard key={videos.id} info={video}  />)}
      
    </div>
  );
};

export default Videocontainer;
