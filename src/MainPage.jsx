// MainPage.js
import React from "react";
// import { Link } from 'react-router-dom';
import "./MainPage.css";
import Reviews from "./Reviews";

const MainPage = () => {
  return (
    <div>
      {/* Home section */}
      <div
        id="home"
        className="home flex flex-col items-center justify-center text-center"
      >
        <div className="home_content">
          <h1 className="text-2xl md:text-4xl lg:text-7xl">
            Your Next Culinary Adventure
          </h1>
          <h1 className="text-2xl md:text-4xl lg:text-7xl">
            Awaits at Momos Point
          </h1>
          <p className="text-base md:text-lg lg:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam quis.
          </p>

          <div className="buttons flex flex-col gap-4 md:flex-row">
            <button className="order-button red w-full p-4">
              Order&nbsp;on&nbsp;Zomato
            </button>
            <button className="order-button orange w-full p-4">
              Order&nbsp;on&nbsp;Swiggy
            </button>
          </div>
        </div>
      </div>

      {/* About section */}
      <div id="about" className="about md:p-32 p-6 mt-[130px] lg:mt-[160px] md:mt-[120px] sm:mt-[150px] ">
        <div className="aboutus flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 text-center items-center justify-center">
            <img className="w-3/4" src="./images/aboutus.png" alt="About Us" />
          </div>
          <div className="aboutus_content w-full md:w-1/2 p-2 md:p-6 lg:p-12">
            <h2 className="text-2xl md:text-4xl lg:text-6xl">About Us</h2>
            <p>
              This gourmet journey started in nineties at a small shop in
              k.nags. It is sheer patronage of guests like you and blessings
              that Momo's point has made a mark in almost all news channels and
              leading newspapers.
              <br />
              <br /> We at Momo's point are witness to the journey of some
              Bollywood celebs, celebrity chefs and famous media personalities
              right from their DU days till today we are committed to give you
              best experience visit after visit.
            </p>
          </div>
        </div>

        <div className="featured w-full mt-20">
          <h2 className="text-4xl text-left mb-20">We Featured On</h2>
          <div className="flex flex-wrap justify-between gap-6">
            <img width={150} src="./images/f1.png" alt="Company 1" />
            <img width={250} src="./images/f2.png" alt="Company 2" />
            <img width={100} src="./images/f3.png" alt="Company 3" />
            <img width={250} src="./images/f4.png" alt="Company 4" />
            <img width={150} src="./images/f5.png" alt="Company 5" />
            <img width={100} src="./images/f6.png" alt="Company 6" />
            {/* <img className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6' src='./images/f6.png' alt='Company 6' /> */}
          </div>
        </div>
      </div>

      {/* Menu section */}
      <div id="menu" className="menu md:p-32 p-6">
        <div className="menu-top flex justify-between items-center">
          <div className="menu-header">
            <p>OUR MENU</p>
            <h2 className="text-xl md:text-2xl lg:text-4xl">
              Menu That Always <br /> Makes You Fall In Love
            </h2>
          </div>
          <div className="menu-btn flex justify-between gap-4">
            <button className="change-menu-button h-14 w-14">
              <span className="font-bold text-xl">{"<"}</span>
            </button>
            <button className="change-menu-button h-14 w-14 ">
              <span className="font-bold text-xl">{">"}</span>
            </button>
          </div>
        </div>

        <div className="menu-categories  mt-12 justify-between md:flex ">
          <div className="menu-category-container  flex flex-row md:flex-col overflow-auto gap-10 md:gap-4 mr-10">
            <div className="menu-category flex gap-6 p-4 ">
              <img src="./images/shrimp.png" alt="Mediterranean Icon" />
              <h3 className="text-lg md:text-xl lg:text-2xl">Mediterranean</h3>
            </div>
            <div className="menu-category flex gap-6 p-4 ">
              <img src="./images/italian.png" alt="Italian Icon" />
              <h3 className="text-lg md:text-xl lg:text-2xl">Italian</h3>
            </div>
            <div className="menu-category flex gap-6 p-4">
              <img src="./images/fish.png" alt="Thai Icon" />
              <h3 className="text-lg md:text-xl lg:text-2xl">Thai</h3>
            </div>
            <div className="menu-category flex gap-6 p-4">
              <img src="./images/sushi.png" alt="Chinese Icon" />
              <h3 className="text-lg md:text-xl lg:text-2xl">Chinese</h3>
            </div>
            <div className="menu-category flex gap-6 p-4">
              <img src="./images/burger.png" alt="Continental Icon" />
              <h3 className="text-lg md:text-xl lg:text-2xl">Continental</h3>
            </div>
          </div>

          <div className="menu-images flex gap-8 overflow-hidden mt-8 md:mt-0">
            <img
              className="w-full sm:w-3/2 md:w-2/4 lg:w-3/4 xl:w-1/2"
              src="./images/pizza1.png"
              alt="Pizza1"
            />
            <img
              className="w-full sm:w-3/2 md:w-2/4 lg:w-3/4 xl:w-1/2"
              src="./images/pizza2.png"
              alt="Pizza2"
            />
          </div>
        </div>
      </div>

      {/* Reviews section */}
        <Reviews />
      {/* <div id="reviews" className='reviews'>
        <div className='reviews-header'>
          <p>WHAT THEY SAY</p>
          <h2>What Our Customers Say<br /> About Us</h2>
        </div>

        <div className='reviews-desc'>
          <button className='change-review-button' onClick={handleChangeReview}>
            {'<'}
          </button>
          <div className='reviews-card'>
            <img src='./images/commas.png' alt='inverted commas' />
            <p>{currentReviewData.content}</p>
            <img src='./images/review_author.png' alt='review author' />
            <h3>{currentReviewData.author}</h3>
            <img src='./images/rating.png' alt='5 star rating' />
            <img src='./images/google_review.png' alt='Google review' />
          </div>

          <div className='reviews-image'>
            <img src='./images/review.png' alt='reviews' />
          </div>
        </div>
      </div> */}

      {/* Blog section */}
      <div className=" md:p-32 p-6">
  <div className="blogs">
    <h2 className="text-xl md:text-2xl lg:text-4xl text-center mb-4">Blogs</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-12 justify-center items-center">
      {/* Blog Card 1 */}
      <div className="blog-card">
        <img src="./images/blog_card.png" alt="Blog 1" />
      </div>

      {/* Blog Card 2 */}
      <div className="blog-card">
        <img src="./images/blog_card2.png" alt="Blog 2" />
      </div>

      {/* Blog Card 3 */}
      <div className="blog-card">
        <img src="./images/blog_card3.png" alt="Blog 3" />
      </div>
    </div>
  </div>
</div>

      {/* Footer section */}
      <div id="footer" className="footer">
        <div className="map text-center md:text-left md:p-32 mx-auto items-center justify-center p-6">
          {/* Image of the map */}
          <h2 className="text-xl md:text-2xl lg:text-4xl">Visit Us Today</h2>
          {/* <img className='mx-auto md:mx-0' src='./images/map.png' alt='Map' /> */}
          <div className="flex md:flex-row flex-col w-full mx-auto">
  <div className="bg-[#333F72] p-12 md:w-1/4 w-full">
    <h1 className="text-4xl my-4">
      Address
    </h1>
    <span className="text-lg">Momos Point</span>
    <hr className="mt-20 opacity-0" />
    <span className="">
      47 UA, Block UA, Jawahar Nagar, Kamla Nagar, New Delhi, Delhi, 110007
    </span>
    <hr className="mt-20 opacity-0" />
    <button className="order-button">CONTACT US</button>
  </div>

  <div className="google-map-code w-full  lg:w-[1200px] md:w-full">
  <iframe
  src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1750.1695838677174!2d77.2074007201103!3d28.679499217588642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s%2047%20UA%2C%20Block%20UA%2C%20Jawahar%20Nagar%2C%20Kamla%20Nagar%2C%20New%20Delhi%2C%20Delhi%2C%20110007!5e0!3m2!1sen!2sin!4v1709286543013!5m2!1sen!2sin"
  frameBorder="0"
  className="w-full h-full"
  style={{ border: 0 }}
  allowfullscreen=""
  aria-hidden="false"
  tabIndex="0"
/>
  </div>
</div>
</div>

        <div className="footer-content flex flex-col md:flex-row md:p-24 p-6">
          <div className="footer-logo text-center md:text-left items-center justify-center" >
            {/* Logo */}
            <img
              className="mx-auto md:mx-0 items-center justify-center text-center"
              height={100}
              width={100}
              src="./images/logo.png"
              alt="Momos Point Logo"
            />
            <p>
              Our Job is to filling your tummy
              <br /> with delicious food and with
              <br /> fast and free delivery.
            </p>
          </div>

          <div className="footer-links-and-contact flex flex-col md:flex-row gap-6">
            <div className="footer-links text-center md:text-left">
              {/* Navigation links */}
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#reviews">Reviews</a>
              <a href="#menu">Our Menu</a>
            </div>
            <div className="footer-contact text-center md:text-left">
              <div>
                <h2>Get In Touch</h2>
                <p>Question or Feedback?</p>
                <p>We'd love to hear from you</p>
              </div>
              {/* Email and social media buttons */}
              <img
                className="mx-auto md:mx-0 mt-6"
                src="./images/email_icon.png"
                alt="Email Us"
              />
              <div className="social-media mx-auto md:mx-0 mt-6 flex items-center justify-center">
                <img src="./images/instagram.png" alt="Instagram" />
                <img src="./images/facebook.png" alt="Facebook" />
                <img src="./images/twitter.png" alt="Twitter" />
              </div>
            </div>
          </div>
          {/* <hr />
    <p className="footer-text">All Rights Reserved Momos Point @2024</p> */}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
