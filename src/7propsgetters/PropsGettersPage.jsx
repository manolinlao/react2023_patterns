import { FormWithRenderProps } from './FormWithRenderProps';

export const PropsGettersPage = () => {
  const onSubmit = (values) => alert(JSON.stringify(values));

  const _handleChange = (handleChange) => (e) => {
    alert('change');
    handleChange(e);
  };

  return (
    <div>
      <h3>Ejemplo SIN props getters</h3>
      <FormWithRenderProps initialState={{ name: '', jobTitle: '' }}>
        {({ formValues, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <p>Name</p>
              <input type='text' name='name' value={formValues.name} onChange={_handleChange(handleChange)} />
            </div>
            <div>
              <p>Job Title</p>
              <input type='text' name='jobTitle' value={formValues.jobTitle} onChange={handleChange} />
            </div>
            <button style={{ margin: '8px 0' }} type='submit'>
              Submit
            </button>
          </form>
        )}
      </FormWithRenderProps>
    </div>
  );
};
