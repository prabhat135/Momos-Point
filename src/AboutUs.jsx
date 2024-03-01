// AboutUs.js
import React from 'react';

const AboutUs = () => {
  return (
 <div  className="flex flex-col md:flex-row">
  <div className="w-full md:w-1/2">
    <img height={100} width={50} src="aboutUsImage.jpg" alt="About Us" />
  </div>
  <div className="w-full md:w-1/2">
    <h2>About Us</h2>
    <p>About Us content here...</p>
  </div>
  <div className="w-full md:w-1/2">
    <h2>WE FEATURED ON</h2>
    {/* Display small PNGs of featured companies here */}
  </div>
  <div className="w-full md:w-1/2">
    <h2>Menu</h2>
    {/* Display menu for different regions here */}
  </div>
</div>
  );
};

export default AboutUs;
