import { useState } from 'react';

const Cat = ({ mouseCoords }) => {
  return (
    <div style={{ width: '20px', height: '20px', backgroundColor: 'blue', position: 'absolute', left: mouseCoords.x, top: mouseCoords.y }}></div>
  );
};

const Mouse = ({ renderprop }) => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    console.log(e.clientX, e.clientY);
    setCoords({ x: e.clientX, y: e.clientY });
  };

  return (
    <div style={{ height: '100vh' }} onMouseMove={handleMouseMove}>
      <div>aqui debajo ejecutro el renderprops</div>
      {/* usamos la render prop para determinar dinámicamente qué renderizar*/}
      {renderprop(coords)}
    </div>
  );
};

const withMouse = (Component) => {
  console.log('withmouse');

  const NewComponent = () => {
    return (
      <Mouse
        renderprop={(coords) => {
          return (
            <div>
              <div>
                hola {coords.x} {coords.y}
              </div>
              <div>
                <Component mouseCoords={coords} />
              </div>
            </div>
          );
        }}
      />
    );
  };

  return NewComponent;
};

export const MouseTrackerWithRenderPropHOC = withMouse(Cat);
