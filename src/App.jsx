import React from 'react';
import {BrowserRouter as Router, Routes, Route, NavLink} from 'react-router-dom';
import {Login} from './Login';
import {Logout} from './Logout';
import {SzallasList} from './SzallasList';
import './App.css';

export const App =() =>{
  return(
    <Router>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
          <div className="navbar-brand">Szállás JWT</div>
          <button className="navbar-toggler" 
          type='button' 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul>
              <li className='nav-item'>
                <NavLink></NavLink>
              </li>
            </ul>
          </div>

        </div>
      </nav>
      <Routes>
        <Route path = "/" element={<Login/>}/>
        <Route path = "/Logout" element={<Logout/>}/>
        <Route path = "/SzallasList" element={<SzallasList/>}/>
      </Routes>
    </Router>
  )
}
