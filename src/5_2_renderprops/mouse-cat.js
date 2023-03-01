import { useState } from 'react';

const Cat = ({ mouse }) => {
  return <div style={{ width: '20px', height: '20px', backgroundColor: 'blue', position: 'absolute', left: mouse.x, top: mouse.y }}></div>;
};

const MouseWithCat = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setCoords({ x: e.clientX, y: e.clientY });
  };

  return (
    <div style={{ height: '100vh' }} onMouseMove={handleMouseMove}>
      <Cat mouse={coords} />
    </div>
  );
};

export const MouseTrackerCat = () => {
  return (
    <div>
      <h4>move the mouse</h4>
      <MouseWithCat />
    </div>
  );
};
