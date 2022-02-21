import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceworker from '../src/serviceworker';

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import ResumeContextProvider from './Context/ResumeContextProvider';

ReactDOM.render(
  <React.StrictMode>
    <ResumeContextProvider>
    <App />
    </ResumeContextProvider>

  </React.StrictMode>,
  document.getElementById('root')
);
serviceworker.register();


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
