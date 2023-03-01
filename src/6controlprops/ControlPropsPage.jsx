import { useState } from 'react';
import { FinalLikeButton } from './FinalLikeButton';
import { LikeButton } from './LikeButton';

export const ControlPropsPage = () => {
  const [counter, setCounter] = useState(0);

  const handleChange = (e) => {
    if (e.target.value === 'like') {
      setCounter(counter + 1);
    }
  };

  const handleUpdateCounter = () => {
    setCounter(counter + 5);
  };

  return (
    <div>
      <h4>Control Props</h4>
      <h5>SIN control props</h5>
      <LikeButton cb={(arg) => arg + 100} />
      <h5>CON control props</h5>
      <input type='text' onChange={handleChange} />
      <FinalLikeButton value={counter} setValue={handleUpdateCounter} />
    </div>
  );
};
