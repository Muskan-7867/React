// src/Layout.js
import React from 'react';
import RelatedVideos from './components/RelatedVideos';
import Videocard from './components/Videocard';




const Layout = ({ apiKey, videoId }) => {
   
  return (
    <div className="container">
      <div className="main-video">
        <Videocard apiKey={apiKey} videoId={videoId} />
      </div>
      <div className="related-videos">
        <RelatedVideos apiKey={apiKey} videoId={videoId} />
      </div>
    </div>
  );
};

export default Layout;
