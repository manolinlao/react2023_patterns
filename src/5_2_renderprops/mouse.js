import { useState } from 'react';

// el componente <Mouse> encapsula el comportamiento que necesitamos...
const Mouse = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const { x, y } = coords;

  const handleMouseMove = (event) => {
    setCoords({ x: event.clientX, y: event.clientY });
  };

  return (
    <div style={{ height: '100vh' }} onMouseMove={handleMouseMove}>
      {/* cómo renderizamos algo más que un <p>?? */}
      <p>
        the current mouse position is {x} - {y}
      </p>
    </div>
  );
};

export const MouseTracker2 = () => {
  return (
    <div>
      <h4>move the mouse</h4>
      <Mouse />
    </div>
  );
};
