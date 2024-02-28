import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const Protected = ({ Component }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("login");
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, []); // Adding an empty dependency array to ensure useEffect runs only once

  return (
    <div>
      <Component />
    </div>
  );
};
