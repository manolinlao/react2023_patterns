import { useControlledForm } from '../hooks/useControlledForm';

export const MyForm = () => {
  const { formValues, handleChange, handleSubmit, resetForm } = useControlledForm({ name: '' });

  const showData = (values) => {
    console.log(JSON.stringify(values));
    resetForm();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(showData)}>
        <input name='name' value={formValues.name} onChange={handleChange} />
        <button>submit</button>
      </form>
    </div>
  );
};
