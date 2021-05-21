import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}


const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink exact to="/" style={link}>Home</NavLink>
      <NavLink exact to="/movies" style={link}>Movies</NavLink>
      <NavLink exact to="/directors" style={link}>Directors</NavLink>
      <NavLink exact to="/actors" style={link}>Actors</NavLink>
    </div>
  );
};

export default NavBar;
