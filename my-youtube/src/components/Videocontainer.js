import React, { useEffect, useState } from 'react';
import { youtube_video_api } from '../utils/constants';
import Videocard from './Videocard';
import { Link } from 'react-router-dom';

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

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 p-4 place-items-center">
      {videos.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <Videocard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default Videocontainer;
