import { ConCustomHook, SinCustomHook } from './1customhook';
import { FormSinHOC, SinHOC } from './2hoc';
import { FormConHOC } from './2hoc/FormConHOC';
import { ExtensibleStylesPage } from './3extensiblestyles/ExtensibleStylesPage';
import { CompoundComponentPage } from './4compoundcomponent/CompoundComponentPage';

function App() {
  return (
    <div className='App'>
      {/*<SinCustomHook />
      <hr />
      <ConCustomHook />
      */}
      {/* <FormSinHOC />
      <FormConHOC />*/}

      <ExtensibleStylesPage />
      <CompoundComponentPage />
    </div>
  );
}

export default App;
