import { Button } from './components/Button';
import { CustomButton } from './components/CustomButton';

export const ExtensibleStylesPage = () => {
  return (
    <div>
      <h4>Ejemplo sin Extensible Styles</h4>
      <Button type='button'>Click</Button>
      <hr />
      <h4>Ejemplo con Extensible Styles</h4>
      <CustomButton type='button' className='btn btn-success' style={{ color: '#ff0000' }}>
        Click
      </CustomButton>
    </div>
  );
};
