import { useState } from 'react';

export const MouseTracker = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const { x, y } = coords;

  const handleMouseMove = (event) => {
    setCoords({ x: event.clientX, y: event.clientY });
  };

  return (
    <div style={{ height: '100vh' }} onMouseMove={handleMouseMove}>
      <h4>move the mouse around</h4>
      <p>
        the current mouse position is {x} - {y}
      </p>
    </div>
  );
};
