import React from 'react';
import './Footer.css';
// import { Button } from '../Buttons';
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import { FcBiotech } from 'react-icons/fc';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              <FcBiotech className='navbar-icon' />
              MEDLOG
            </Link>
          </div>
          
          <div className='social-icons'>
            <medium className='website-rights'>MEDLOG © 2020</medium>
            <Link
              className='social-icon-link'
              to='https://github.com/hellogoodbyemae/project3'
              target='_blank'
              aria-label='Github'
            >
              <FaGithub />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;