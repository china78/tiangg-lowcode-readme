import { Routes, Route } from 'react-router-dom';
import Manage from '../pages/doc/components/manage';
import WorkArea from '../pages/doc/components/workArea';
import PageEdit from '../pages/doc/components/pageEdit';
import PageTemplate from '../pages/doc/components/pageTemplate';
import DocComponent from '../pages/doc/components/docComponent';
import Canvas from '../pages/doc/components/canvas';
import ComponentTree from '../pages/doc/components/componentTree';
import ComponentAttribute from '../pages/doc/components/componentAttribute';
import Syles from '../pages/doc/components/syles';
import DocScripts from '../pages/doc/components/docScripts';
// dev
import Desc from '../pages/dev/components/desc';
import ScriptDev from '../pages/dev/components/scriptDev';
import ComponentDev from '../pages/dev/components/componentDev';

function routes() {
  return (
    <Routes>
      <Route path="/" >
        <Route index element={<Manage />} />
        <Route path="doc">
          <Route path="manage" element={<Manage />}>
            <Route path="*" element={<Manage />} />
          </Route>
          <Route path="workArea" element={<WorkArea />} >
            <Route path="*" element={<WorkArea />} />
          </Route>
          <Route path="pageEdit" element={<PageEdit />} >
            <Route path="*" element={<PageEdit />} />
          </Route>
          <Route path="pageTemplate" element={<PageTemplate />} >
            <Route path="*" element={<PageTemplate />} />
          </Route>
          <Route path="docComponent" element={<DocComponent />} >
            <Route path="*" element={<DocComponent />} />
          </Route>
          <Route path="canvas" element={<Canvas />} >
            <Route path="*" element={<Canvas />} />
          </Route>
          <Route path="componentTree" element={<ComponentTree />} >
            <Route path="*" element={<ComponentTree />} />
          </Route>
          <Route path="componentAttribute" element={<ComponentAttribute />} >
            <Route path="*" element={<ComponentAttribute />} />
          </Route>
          <Route path="syles" element={<Syles />} >
            <Route path="*" element={<Syles />} />
          </Route>
          <Route path="docScripts" element={<DocScripts />} >
            <Route path="*" element={<DocScripts />} />
          </Route>
        </Route>
        <Route path="dev">
          <Route path="desc" element={<Desc />} >
            <Route path="*" element={<Desc />} />
          </Route>
          <Route path="script" element={<ScriptDev />} >
            <Route path="*" element={<ScriptDev />} />
          </Route>
          <Route path="component" element={<ComponentDev />} >
            <Route path="*" element={<ComponentDev />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  )
}

export default routes;

