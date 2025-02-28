/**@jsxImportSource @emotion/react */
import { BrowserRouter } from 'react-router-dom';
import {css, Global} from '@emotion/react';

import AppRoutes from './routes/routes';
import Navbar from './components/Navbar';

import './App.css';

const globalStyle = css `
#root {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
}`

function App() {
  return (
    <BrowserRouter basename='/Usakura/'>
      <Global styles={globalStyle} />
      <div className='app'>
        <Navbar />
        <AppRoutes />
      </div>
    </BrowserRouter>
  )
}

export default App
