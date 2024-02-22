// About.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate()
  return (
    <div>
      <h2>HomePage</h2>
      <p>This is the home page content.</p>
      <br />
      <button onClick={()=> navigate('about')}>Go to about page</button>
    </div>
  );
}

export default Home;
