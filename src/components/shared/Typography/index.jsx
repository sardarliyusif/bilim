import React from 'react';
import './style.scss';

// variant: title | secondary | link
// size: small | medium | large

// example: <Typography size="medum" variant="title" >My Site Header</Typography>

export const Typography = ({ children = 'Hello, World!', variant = 'secondary', size = 'medium' }) => {
  return (
    <span className={`typography ${variant} ${size}`} >{children}</span>
  )
}
