import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/routes';
import Navbar from './components/Navbar';
import Social from './components/Social';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="layout-container">
        <div className="side-container left"></div>
        <div className="app-container">
          <AppRoutes />
          <Navbar />
        </div>
        <div className="side-container right"><Social /></div>
      </div>
    </BrowserRouter>
  );
}

export default App;