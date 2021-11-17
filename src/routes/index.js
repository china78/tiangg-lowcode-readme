import { Routes, Route } from 'react-router-dom';
import Doc from '../pages/doc';
import Dev from '../pages/dev';

function routes() {
  return (
    <Routes>
      <Route path="/" element={<Doc />} />
      <Route path="/dev" element={<Dev />} />
    </Routes>
  )
}

export default routes;

