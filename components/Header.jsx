// Header.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import ContactForm from './ContactForm';
import { Link as ScrollLink } from 'react-scroll';


const Header = () => {
  const [open, setOpen] = useState(false);
  let [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    let header = document.getElementById("header");
    window.addEventListener("scroll", () => {
      if (window.scrollY > 120) {
        header.style.background = "#F3EDE1";
        header.style.zIndex = "10";
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
    <>
      <header id='header' className='md:px-4 lg:px-32'>
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
              <div className='bg-[#F3EDE1] absolute mt-[500px] w-[100%] p-5'>
                <nav className='md:block gap-6 flex-col rounded-lg text-black'>
                  {/* <Link to="/">Home</Link>
                  <Link to="/#about">About Us</Link>
                  <Link to="/#reviews">Reviews</Link>
                  <Link className='mr-12' to="/#blog">Blog</Link> */}
                  <ScrollLink
                  to="home" // the id of the element you want to scroll to
                  spy={true}
                  smooth={true}
                  offset={-70} // adjust the offset to the height of your header or any fixed elements
                  duration={500}
                >
                  Home
                </ScrollLink>
                
                <ScrollLink
                  to="about" // the id of the element you want to scroll to
                  spy={true}
                  smooth={true}
                  offset={-70} // adjust the offset to the height of your header or any fixed elements
                  duration={500}
                >
                  About Us
                </ScrollLink>

                <ScrollLink
                  to="reviews" // the id of the element you want to scroll to
                  spy={true}
                  smooth={true}
                  offset={-70} // adjust the offset to the height of your header or any fixed elements
                  duration={500}
                >
                  Reviews
                </ScrollLink>
                
                <ScrollLink
                  to="blog" // the id of the element you want to scroll to
                  spy={true}
                  smooth={true}
                  offset={-70} // adjust the offset to the height of your header or any fixed elements
                  duration={500}
                  className="mr-12"
                >
                  Blog
                </ScrollLink>
                  <button onClick={() => setIsOpen(true)} className="contact-button ">CONTACT US</button>
                </nav>
              </div>

            </>

          ) : (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" onClick={() => setOpen(true)} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 md:hidden cursor-pointer">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
              <nav className='md:block hidden'>
                {/* <Link className="lg:mx-9 md:mx-6" to="/#about">About Us</Link> */}
                {/* <Link className="lg:mx-9 md:mx-6" to="/">Home</Link> */}
                {/* <Link className="lg:mx-9 md:mx-6" to="/#reviews"></Link> */}
                {/* <Link className="lg:mx-9 md:mx-6" to="/#blog">Blog</Link> */}
                <ScrollLink
                  to="home" // the id of the element you want to scroll to
                  spy={true}
                  smooth={true}
                  offset={-70} // adjust the offset to the height of your header or any fixed elements
                  duration={500}
                  className="lg:mx-9 md:mx-6"
                >
                  Home
                </ScrollLink>
                
                <ScrollLink
                  to="about" // the id of the element you want to scroll to
                  spy={true}
                  smooth={true}
                  offset={-70} // adjust the offset to the height of your header or any fixed elements
                  duration={500}
                  className="lg:mx-9 md:mx-6"
                >
                  About Us
                </ScrollLink>

                <ScrollLink
                  to="reviews" // the id of the element you want to scroll to
                  spy={true}
                  smooth={true}
                  offset={-70} // adjust the offset to the height of your header or any fixed elements
                  duration={500}
                  className="lg:mx-9 md:mx-6"
                >
                  Reviews
                </ScrollLink>
                
                <ScrollLink
                  to="blog" // the id of the element you want to scroll to
                  spy={true}
                  smooth={true}
                  offset={-70} // adjust the offset to the height of your header or any fixed elements
                  duration={500}
                  className="lg:mx-9 md:mx-6"
                >
                  Blog
                </ScrollLink>
                <button onClick={() => setIsOpen(true)} className="contact-button">CONTACT US</button>
              </nav>
            </>
          )
        }
        {/* {isOpen && <ContactForm setIsOpen={setIsOpen} isOpen={isOpen} />} */}
      </header>,
      {isOpen && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-10 z-20" />
          <ContactForm setIsOpen={setIsOpen} isOpen={isOpen} />
        </>
      )}
    </>
  );
};

export default Header;