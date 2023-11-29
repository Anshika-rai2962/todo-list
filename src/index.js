import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import Clock from './Component/Clock';
import reportWebVitals from './reportWebVitals';



const root = ReactDOM.createRoot(document.getElementById('root'));
// function tick() {
//   root.render(<Clock date={new Date()} />);
// }
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// setInterval(tick,1000);
reportWebVitals();
