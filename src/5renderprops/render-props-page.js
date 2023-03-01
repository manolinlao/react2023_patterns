import { useState } from 'react';
import { ErrorBoundary } from './error-boundary';
import { FinalErrorBoundary } from './FinalErrorBoundary';

const MyBug = () => {
  const [isError, setIsError] = useState(false);

  const handleCrash = () => {
    setIsError(true);
  };

  if (isError) {
    throw new Error('ERRORRRR');
  }
  return <button onClick={handleCrash}>crashear la app</button>;
};

export const RenderPropsPage = () => {
  return (
    <div>
      <h4>Render Props</h4>
      <h5>sin render props</h5>
      <ErrorBoundary>
        <MyBug />
      </ErrorBoundary>
      <h5>con render props</h5>
      <FinalErrorBoundary renderProp={(error) => <p>{`Ups D: ${error.message}`}</p>}>
        <MyBug />
      </FinalErrorBoundary>
    </div>
  );
};
