import { useState } from 'react';

const withControlledForm = (FormComponent, initialState = {}) => {
  const ControlledForm = ({ onSubmit, miTexto }) => {
    const [formValues, setFormValues] = useState(initialState);

    const handleChange = (e) => {
      const {
        target: { name, value }
      } = e;
      setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      onSubmit(formValues);
    };

    return <FormComponent formValues={formValues} handleChange={handleChange} handleSubmit={handleSubmit} miTexto={miTexto} />;
  };
  return ControlledForm;
};

const MyFormA = ({ formValues, handleChange, handleSubmit, miTexto }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <p>Name</p>
        <span>{miTexto}</span>
        <input type='text' name='name' value={formValues.name} onChange={handleChange} />
      </div>
      <button type='submit'>submit</button>
    </form>
  );
};

export const MyFormAControlled = withControlledForm(MyFormA, { name: 'john doe' });
