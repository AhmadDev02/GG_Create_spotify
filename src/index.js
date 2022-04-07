// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './Components/App/App';


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

import React from 'react';
import ReactDOM from 'react-dom';
// import { createRoot } from 'react-dom/client';
import './index.css';
// import App from './Components/App/App';
import AppRouter from './AppRouter'


// const container = document.getElementById('root');
// const root = createRoot(container);

ReactDOM.render(
  <React.StrictMode>
    <AppRouter/>
  </React.StrictMode>,
  document.getElementById('root')
);

