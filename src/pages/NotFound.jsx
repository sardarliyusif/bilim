import React from 'react'
import { useLocation } from 'react-router-dom';

export const NotFound = () => {
  const location = useLocation();
  return (
    <div>404 Not Found url: {location.pathname}</div>
  )
}
