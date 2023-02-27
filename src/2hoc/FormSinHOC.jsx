import { NormalForm } from './NormalForm';

export const FormSinHOC = () => {
  const handleNormalSubmit = (evento) => {
    alert(evento);
  };
  return (
    <div>
      <h4>Ejemplo sin High Order Component (HOC)</h4>
      <NormalForm onSubmit={handleNormalSubmit} />
    </div>
  );
};
