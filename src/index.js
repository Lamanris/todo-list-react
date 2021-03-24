import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './assets/styles/main.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import {TasksContextProvider} from "./context/tasks-context";

ReactDOM.render(
    <TasksContextProvider>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </TasksContextProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
