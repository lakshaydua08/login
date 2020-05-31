import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
    
       <ul className="navLink">
       <Link to ="/">
           <li>Home</li>
        </Link> 
        <Link to='/signin'>
           <li>Sign In</li>
        </Link>  
        <Link to ="/signup">
           <li>Sign Up</li>
        </Link>  
         
       </ul>
    </nav>

      
    
  );
}

export default Nav;
