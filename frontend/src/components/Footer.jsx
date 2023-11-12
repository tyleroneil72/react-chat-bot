import React from "react";
import "../css/Footer.css";

const Footer = () => {
  return (
    // Using React fragments to avoid unnecessary divs
    <>
      <footer>
        Created by Tyler O'Neil
        <a target='_blank' href='https://github.com/tyleroneil72'>
          Github
        </a>
        <a target='_blank' href='https://www.linkedin.com/in/tyler-oneil-dev/'>
          Linkedin
        </a>
      </footer>
    </>
  );
};

export default Footer;
