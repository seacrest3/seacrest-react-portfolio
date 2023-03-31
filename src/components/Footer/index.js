import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import "./style.css";

function Footer() {

  const contact = [
    { name: 'Telephone', url: 'tel:+44 7716876577', icon: faPhone },
    { name: 'Email', url: 'mailto:o7716442@gmail.com', icon: faEnvelope },
    { name: 'LinkedIn', url: 'https://hk.linkedin.com/in/kelvin-lee-8a9929146', icon: faLinkedinIn },
    { name: 'GitHub', url: 'https://github.com/seacrest3', icon: faGithub },
    { name: 'CV', url: 'https://drive.google.com/file/d/1zClOUx388Hq16WJjxkTDxobbfCcNBpbP/view?usp=share_link', icon: faFileAlt }
  ];
  return (
    <footer className="footer">
      <span>Lamda 2023</span>
      {contact.map((link) => (
        <ul className="col-lg-1 col-md-2 col-sm-2">
          <a href={link.url} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={link.icon} className="contactImage" />
          </a>
        </ul>
      ))}
    </footer>
  );
}

export default Footer;