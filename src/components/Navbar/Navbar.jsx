// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import { MdOutlineMenu } from "react-icons/md";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [mobileMenu , setMobileMenu] = useState(false);
  const toggleMenu =()=>{
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true)
  }

  return (
    <nav className={`container ${isScrolled ? "dark-nav" : ""}`}>
      <img
        src="https://ue.ucdavis.edu/sites/g/files/dgvnsk4711/files/UE%20Logo-01_1.png"
        alt="logo"
        className="logo"
      />
      <ul className={mobileMenu ? '' : "hide-mobile-menu"}>
        <li>
          <Link to="hero " smooth={true} offset={0} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="programs" smooth={true} offset={-260} duration={500}>
            Program
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} offset={-160} duration={500}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="campus" smooth={true} offset={-280} duration={500}>
            Campus
          </Link>
        </li>
        <li>
          <Link to="testimonials" smooth={true} offset={-290} duration={500}>
            Testimonials
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            offset={-290}
            duration={500}
            className="btn"
          >
            Contact us
          </Link>
        </li>
      </ul>
      <div >< MdOutlineMenu className="menu-icon" onClick={toggleMenu} /></div>
      
    </nav>
  );
};

export default Navbar;
