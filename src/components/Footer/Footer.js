import React from 'react';
import './Footer.scss'
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <>
        <footer className='w-100'>
            <div className='container col-md-12 text-center'>
              <button type="button" class="btn btn-success"><NavLink className="nav-link" to='/form'>Postular!</NavLink></button>
            </div>
        </footer>
    </>
  )
}