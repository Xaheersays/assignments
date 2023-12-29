// Display.jsx
import React from 'react';
import { useSpring, animated } from 'react-spring';

function Display({ title, description }) {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 800 },
  });

  if (!title || !description) {
    return null;
  }

  return (
    <animated.div style={props} className='text-white bg-slate-700 rounded-md p-4 mt-3'>
      <div className='font-mono font-bold text-2xl'>title: {title}</div>
      <div className='font-mono font-bold text-xl'>description: {description}</div>
    </animated.div>
  );
}

export default Display;


