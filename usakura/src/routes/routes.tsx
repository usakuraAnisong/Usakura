import { Routes, Route } from 'react-router-dom';

import MainView from '../views/MainView';

function AppRoutes() {
  return (
    <Routes>
      {/* 기본 경로 */}
      <Route path="/" element={<MainView />} />

    </Routes>
  );
} 
export default AppRoutes;