import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.scss';
import dashboard from '../images/dashboard.png';
import client from '../images/client.png';
import bank from '../images/bank.png';
import sales from '../images/sales.png';
import cheques from '../images/cheques.png';
import email from '../images/email.png';
import internal from '../images/internal.png';
import activity from '../images/activity.png';
import logout from '../images/logout.png';

const Navbar = () => {

  return (
    <>
      <div className="nav-container">

        <ul className='nav-list'>
          <NavLink to="/" activeClassName="active">
            <li className='nav-links'>
              <div className='nav-icons'>
                <img src={dashboard} alt="" />
              </div>
              Dashboard
            </li>
          </NavLink>
          <NavLink to="clients" activeClassName="active">
            <li className='nav-links'>
              <div className='nav-icons'>
                <img src={client} alt="" />
              </div>
              Client
            </li>
          </NavLink>
          <NavLink to="bank" activeClassName="active">
            <li className='nav-links'>
              <div className='nav-icons'>
                <img src={bank} alt="" />
              </div>
              Bank
            </li>
          </NavLink>
          <NavLink to="sales" activeClassName="active">
            <li className='nav-links'>
              <div className='nav-icons'>
                <img src={sales} alt="" />
              </div>
              Sales
            </li>
          </NavLink>

          <NavLink to="cheques" activeClassName="active">
            <li className='nav-links'>
              <div className='nav-icons'>
                <img src={cheques} alt="" />
              </div>
              Cheques
            </li>
          </NavLink>
          <NavLink to="email" activeClassName="active">
            <li className='nav-links'>
              <div className='nav-icons'>
                <img src={email} alt="" />
              </div>
              Email/Updates
            </li>
          </NavLink>
          <NavLink to="internal" activeClassName="active">
            <li className='nav-links'>
              <div className='nav-icons'>
                <img src={internal} alt="" />
              </div>
              Internal
            </li>
          </NavLink>
          <NavLink to="activity" activeClassName="active">
            <li className='nav-links'>
              <div className='nav-icons'>
                <img src={activity} alt="" />
              </div>
              Activity
            </li>
          </NavLink>

            <li className='nav-links'>
              <div className='nav-icons'>
                <img src={logout} alt="" />
              </div>
              Logout
            </li>


        </ul>
      </div>

    </>
  );
}

export default Navbar;

