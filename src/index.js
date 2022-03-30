import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Main from "./components/Main.js";
import About from "./components/About.js";
import Class from "./components/Class.js";
import Contact from "./components/Contact.js";
import Confidentials from "./components/Confidentials.js";
import Userguide from "./components/Userguide.js";
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
      <Route path ='userguide' element={<Userguide />} />
      <Route path ='confidentials' element={<Confidentials />} />
      </Route>
    </Routes>
  </BrowserRouter>,
</React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
