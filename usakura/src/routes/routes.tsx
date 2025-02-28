import { Routes, Route } from 'react-router-dom';

import Home from '../views/Home';

function AppRoutes() {
  return (
    <Routes>
      {/* 기본 경로 */}
      <Route path="/" element={<Home />} />

    </Routes>
  );
} 
export default AppRoutes;