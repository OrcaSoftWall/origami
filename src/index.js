import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navigation from './navigation'
import App from './App';
import ErrorBoundary from './ErrorBoundary';
//import reportWebVitals from './reportWebVitals';

import { Workbox } from 'workbox-window';   // for offline application ability

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App>
        <Navigation />
      </App>
    </ErrorBoundary>
  </React.StrictMode>
);

// for offline application ability
if ('serviceWorker' in navigator) {
  const wb = new Workbox('/sw.js');

  wb.addEventListener('installed', event => {
    if (event.isUpdate) {
      console.log('A new version of the app has been installed!');
    } else {
      console.log('The app has been installed for the first time!');
    }
  });

  wb.register();
}




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
