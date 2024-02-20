import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import About from './component/about/about';
import Aboutus from './component/aboutus/aboutus';
import Footer from './component/footer/Footer';
import Contacts from './component/contacts_link/contacts';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   
    <App />
   

 
  </React.StrictMode>
);


reportWebVitals();
