import React from 'react'
import { useLocation } from 'react-router-dom';

export const Home = () => {
  // useParams: gives us url params
  const location = useLocation();
  
  return (
    <div>Home url: {location.pathname}</div>
  )
}
