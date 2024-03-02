// Header.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import ContactForm from './ContactForm';

const Header = () => {
  const [open, setOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
 console.log(contactOpen)
  useEffect(() => {
    let header = document.getElementById("header");
    window.addEventListener("scroll", () => {
      if (window.scrollY > 120) {
        header.style.background = "#F3EDE1";
        header.style.zIndex = "9999";
        header.style.transition = "all 0.5s ease-in-out";
        header.style.opacity = "1";
        header.style.visibility = "visible";
        header.style.color = "black"; 
      } else {
        header.style.background = "transparent"
        header.style.color = "white"; 
      }
    })
  })

  return (
    <header id='header' className=''>
      <div className='logo'>
  
        <img src={'/images/logo.png'} className='w-10 h-10 lg:h-[80px] lg:w-[80px] md:h-20 md:w-20' alt="Momos Point Logo" />
      </div>
      {
        open ? (
          <>
             <svg xmlns="http://www.w3.org/2000/svg" onClick={() => setOpen(false)} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
      </svg>
      {/* mobile view */}
      <div className='bg-red-500 absolute mt-[500px] w-[100%] p-5'>
      <nav className='md:block gap-6 flex-col rounded-lg'>
      <Link to="/">Home</Link>
      <Link to="/#about">About Us</Link>
      <Link to="/#reviews">Reviews</Link>
      <Link className='mr-12' to="/#blog">Blog</Link>
      <button onClick={() => setContactOpen(true)} className="contact-button">CONTACT US</button>
    </nav>
</div>

          </>
     
      ) : (  
      <>
    <svg xmlns="http://www.w3.org/2000/svg" onClick={() => setOpen(true)} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 md:hidden cursor-pointer">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>
<nav className='md:block hidden'>
      <Link to="/">Home</Link>
      <Link to="/#about">About Us</Link>
      <Link to="/#reviews">Reviews</Link>
      <Link to="/#blog">Blog</Link>
      <button onClick={() => setContactOpen(true)} className="contact-button">CONTACT US</button>
    </nav>
      </>
   )
      }
      {contactOpen && <ContactForm onClose={() => setContactOpen(false)} />}
    </header>
  );
};

export default Header;