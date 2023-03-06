import React from 'react';
import './Footer.scss'
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <>
        <footer className='w-100'>
            <div className='container col-md-12 text-right'>
              <button type="button" class="btn btn-primary"><NavLink className="nav-link" to='/form'>F</NavLink></button>
            </div>
        </footer>
    </>
  )
}