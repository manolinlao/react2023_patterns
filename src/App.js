import { ConCustomHook, SinCustomHook } from './1customhook';
import { FormSinHOC, SinHOC } from './2hoc';
import { FormConHOC } from './2hoc/FormConHOC';
import { ExtensibleStylesPage } from './3extensiblestyles/ExtensibleStylesPage';
import { CompoundComponentPage } from './4compoundcomponent/CompoundComponentPage';
import { RenderPropsPage } from './5renderprops/render-props-page';
import { MouseTracker2 } from './5_2_renderprops/mouse';
import { MouseTrackerCat } from './5_2_renderprops/mouse-cat';
import { MouseTrackerWithRenderProp } from './5_2_renderprops/mouse-cat-renderprop';
import { MouseTrackerWithRenderPropHOC } from './5_2_renderprops/mouse-cat-renderprop-hoc';
import { MouseTracker } from './5_2_renderprops/MouseTracker';
import { ControlPropsPage } from './6controlprops/ControlPropsPage';
import { PropsGettersPage } from './7propsgetters/PropsGettersPage';

function App() {
  return (
    <div className='App'>
      {/*<SinCustomHook />
      <hr />
      <ConCustomHook />
      */}
      {/* <FormSinHOC />
      <FormConHOC />*/}

      {/*<ExtensibleStylesPage />*/}
      {/*<CompoundComponentPage />*/}
      {/*<RenderPropsPage />*/}
      {/* <ControlPropsPage /> */}
      {/*<PropsGettersPage />*/}

      {/* ejemplo render props mas guay */}
      {/*<MouseTrackerWithRenderProp />*/}
      <MouseTrackerWithRenderPropHOC />
    </div>
  );
}

export default App;
