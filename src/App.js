import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/Routes';
import "./App.scss";

const App = () => {
  return(
    <div>
      <BrowserRouter>
        <Routes />  
      </BrowserRouter>
    </div>
  )
}

export default App;
