import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Main from "./components/main/Main.js";
import About from "./components/about/About.js";
import Class from "./components/class/Class.js";
import Contact from "./components/contact/Contact.js";
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

ReactDOM.render(
<React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path ='/' element={<App />}>
        <Route path ='main' element={<Main />} />
        <Route path ='about' element={<About />} />
        <Route path ='class' element={<Class />} />
        <Route path ='contact' element={<Contact />} />
        <Route path ='userguide' element={<Main />} />
        <Route path ='confidentials' element={<Main />} />
      </Route>
    </Routes>
  </BrowserRouter>
</React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
