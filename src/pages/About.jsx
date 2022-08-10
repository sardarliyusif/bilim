import React from 'react'
import { useLocation } from 'react-router-dom';

export const About = () => {
  const location = useLocation();

  return (
    <div>About url: {location.pathname}</div>
  )
}
