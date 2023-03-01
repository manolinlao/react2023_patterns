import { useState } from 'react';

const Cat = ({ mouseCoords }) => {
  return (
    <div style={{ width: '20px', height: '20px', backgroundColor: 'blue', position: 'absolute', left: mouseCoords.x, top: mouseCoords.y }}></div>
  );
};

const Mouse = ({ renderprop }) => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setCoords({ x: e.clientX, y: e.clientY });
  };

  return (
    <div style={{ height: '100vh' }} onMouseMove={handleMouseMove}>
      {/* usamos la render prop para determinar dinámicamente qué renderizar*/}
      {renderprop(coords)}
    </div>
  );
};

export const MouseTrackerWithRenderProp = () => {
  return (
    <div>
      <h4>move the mouse around</h4>
      <Mouse renderprop={(coords) => <Cat mouseCoords={coords} />} />
    </div>
  );
};
