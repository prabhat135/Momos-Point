// Reviews.js
import React, { useState } from 'react';
import './MainPage.css'; // You may need a separate CSS file for Reviews if needed

const Reviews = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const reviewsData = [
    {
      content: <p>5 stars is less for Momos Point.<br /> For me, Momos Point is the best place to eat Chinese Food. Coming here with my family since I was a kid. The name of the restaurant is Momos Point so obviously the momos will be great. No doubt in it. Momos, Noodles, Rice, Chinese Platter, Stir Fried Vegetables, Thukpa etc Everything here is delicious. I specially lov...</p>,
      author: "Ojasvita Vij",
      rating: 5,
      reviewImage: "./images/review.png",
    },
    {
      content: <p>Momos Point gets fewer than 5 stars.<br /> Momos Point is, in my opinion, the greatest Chinese restaurant. Since I was young, my family and I started coming here. The restaurant is called Momos Point, so it goes without saying that the momos will be excellent. Without a question. Everything on this place is amazing and tasty...</p>,
      author: "Marie Johnson",
      rating: 5,
      reviewImage: "./images/review.png",
    },
    {
      content: <p>5 stars is insufficient for Momos Point.<br /> I think Momos Point is the best place to have Chinese food. Since I was a young child, my family and I have visited this place. Because Momos Point is the name of the establishment, the momos will definitely be superb. Without a doubt, in it. Everything about this eatery is fantastic, including the Chinese...</p>,
      author: "Alexa Ray",
      rating: 5,
      reviewImage: "./images/review.png",
    },
    // Add more reviews as needed
  ];

  const handleChangeReview = () => {
    const nextReview = (currentReview + 1) % reviewsData.length;
    setCurrentReview(nextReview);
  };

  const currentReviewData = reviewsData[currentReview];

  return (
    <div id="reviews" className='reviews md:px-32 py-20 p-4 md:block '>
      <div className='reviews-header text-center md:text-left'>
        <p>WHAT THEY SAY</p>
        <h2 className='text-2xl md:text-4xl lg:text-5xl'>
          What Our Customers Say<br /> About Us
        </h2>
      </div>

      <div className='flex flex-col lg:flex-row mt-20 gap-20'>
        {/* <div className='review-btn'> */}
        <div className='w-full lg:w-[600px] '>
          <div className='flex gap-6'>
            <button className='change-review-button hidden md:block h-14 p-4 w-14 rounded-full' onClick={handleChangeReview}>
              <img className="w-4 h-4 m-auto" src="./images/prev_icon.png" alt="Previous Icon" />
            </button>

            <div className='reviews-card overflow-hidden mx-auto w-full h-auto'>
              <img src='./images/commas.png' alt='inverted commas' />
              <p className='p-6 md:p-12 h-[400px] overflow-auto'>{currentReviewData.content}</p>
              <img src='./images/review_author.png' alt='review author' />
              <h3>{currentReviewData.author}</h3>
              <img src='./images/rating.png' alt='5 star rating' />
              <img src='./images/google_review.png' alt='Google review' />
            </div>

            <button className='change-review-button hidden md:block  h-14 p-4 w-14 rounded-full' onClick={handleChangeReview}>
              <img className="w-4 h-4 mx-auto" src="./images/next_icon.png" alt="Next Icon" />
            </button>
          </div>

        </div>
        <div className='reviews-image mx-auto md:mx-0 lg:ml-14'>
          <img src='./images/review.png' alt='reviews' />
        </div>
      </div>
    </div>
  );
};

export default Reviews;
