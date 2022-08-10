import React from 'react'
import { useLocation } from 'react-router-dom';

export const Contact = () => {
  const location = useLocation();

  return (
    <div>Contact url: {location.pathname}</div>
  )
}
