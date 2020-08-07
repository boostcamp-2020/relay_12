import React from 'react';
import './style.css';
import { FaGithub } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <a href="https://github.com/boostcamp-2020/relay_12">
        <FaGithub /> Github
      </a>
    </footer>
  );
}

export default Footer;
