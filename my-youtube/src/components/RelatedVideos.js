// src/RelatedVideos.js
import React, { useState } from 'react';
import axios from 'axios';

const RelatedVideos = ({ apiKey, videoId }) => {
  const [relatedVideos, setRelatedVideos] = useState([]);

  const fetchRelatedVideos = async () => {
    try {
      const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          part: 'snippet',
          type: 'video',
          relatedToVideoId: videoId,
          maxResults: 10,
          key: apiKey,
        },
      });
      setRelatedVideos(response.data.items);
    } catch (error) {
      console.error('Error fetching related videos', error);
    }
  };

  return (
    <div>
      <button onClick={fetchRelatedVideos}>Fetch Related Videos</button>
      <div>
        {relatedVideos.map((video) => (
          <div key={video.id.videoId}>
            <h3>{video.snippet.title}</h3>
            <p>{video.snippet.description}</p>
            <p>Channel: {video.snippet.channelTitle}</p>
            <p>Published on: {new Date(video.snippet.publishTime).toLocaleDateString()}</p>
            <a href={`https://www.youtube.com/watch?v=${video.id.videoId}`} target="_blank" rel="noopener noreferrer">
              Watch on YouTube
            </a>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedVideos;
