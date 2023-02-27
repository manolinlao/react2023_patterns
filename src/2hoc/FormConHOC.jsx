import { MyFormAControlled } from './form-with-hoc';

export const FormConHOC = () => {
  const handleSubmit = (evento) => {
    alert(evento);
  };
  return (
    <div>
      <h4>Form con HOC</h4>
      <MyFormAControlled onSubmit={handleSubmit} miTexto={'hola'} />
    </div>
  );
};
