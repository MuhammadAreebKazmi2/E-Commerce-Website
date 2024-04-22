import React, {setMenu, useRef, useState} from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pinterest_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
import { Link } from 'react-router-dom';


const Footer = () => {
    const [menu, setMenu] = useState("");

    const searchRef = React.useRef(null);  // Ref for the search container
    const menuRef = React.useRef();

    // Create a function that handles setting both refs
    const setRefs = (element) => {
        // Set the element to the first ref
        searchRef.current = element;
    
        // Set the element to the second ref
        menuRef.current = element;
    };
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt=""></img>
            <p>HU Dukaan</p>
        </div>
        <ul className="footer-links" ref={setRefs}>
            <li onClick={() => setMenu("about")}><Link style={{ textDecoration: 'none' }} to='/about'>About Us</Link> {menu === "about" ? <hr /> : null}</li>
            <li onClick={() => setMenu("return")}><Link style={{ textDecoration: 'none' }} to='/return-policy'>Return Policy</Link> {menu === "return" ? <hr /> : null}</li>
            <li onClick={() => setMenu("terms")}><Link style={{ textDecoration: 'none' }} to='/terms-of-service'>Terms of Service</Link> {menu === "terms" ? <hr /> : null}</li>
            <li onClick={() => setMenu("contact")}><Link style={{ textDecoration: 'none' }} to='/contact-us'>Contact Us</Link> {menu === "contact" ? <hr /> : null}</li>
        </ul>
        <div className="footer-social-icons">
            <div className="footer-icons-container">
                <img src={instagram_icon} alt=""></img>
            </div>
            <div className="footer-icons-container">
                <img src={pinterest_icon} alt=""></img>
            </div>
            <div className="footer-icons-container">
                <img src={whatsapp_icon} alt=""></img>
            </div>
        </div>
        <div className="footer-copyright">
            <hr></hr>
            <p>Copyright @ 2024 - All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer