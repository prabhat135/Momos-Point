// Reviews.js
import React, { useState } from 'react';
import './MainPage.css'; // You may need a separate CSS file for Reviews if needed

const Reviews = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const reviewsData = [
    {
      content: <p>5 stars is less for Momos Point.<br /> For me, Momos Point is the best place to eat Chinese Food. Coming here with my family since I was a kid. The name of the restaurant is Momos Point so obviously the momos will be great. No doubt in it. Momos, Noodles, Rice, Chinese Platter, Stir Fried Vegetables, Thukpa etc Everything here is delicious. I specially love their spring roll sauce. Do visit at once:)</p>,
      author: "Ojasvita Vij",
      rating: 5,
      reviewImage: "./images/ojasvita_review.png",
    },
    {
      content: <p>The food was very good and the portions are apt to the price we pay. Overall nice experience. Only one problem that the lights are too dim so you will definitely struggle with good pictures. As we clicked but due to low light pictures were not clear and up to the mark.<br />We had- veggie pizza (good), Noodles (good quantity),<br />Steam momos (average), chilli potatoes(must try).</p>,
      author: "Apurva Dubey",
      rating: 5,
      reviewImage: "./images/apurva_review.png",
    },
    {
      content: <p>Location -Exactly in main Market Kamla Nagar.<br />We had gone for our friend's birthday celebration party in evening time. You can Peacefully enjoy and get positive vibes from the surrounding environment. We ordered and tasted chilli paneer, chilli chicken, steam rice , french fries and Oreo shake 🍸.<br />Staffs are very good at maintaining hygiene, polite behaviour and supporting.</p>,
      author: "Mukesh Behara",
      rating: 5,
      reviewImage: "./images/mukesh_review.png",
    },
    {
      content: <p>The new outlet of momos point is decked up!<br /> It's big and much better. Food quality remains same. I loved the momo's - specificly masala momos. The Singapore noodles were not great but Rocher shake was nice again. Pricing is moderate in 600, you can have a drink and two items. I will recommend this place to my friends.<br/>Vegetarian options: There are veg options available.</p>,
      author: "Ashutosh Saboo",
      rating: 5,
      reviewImage: "./images/ashutosh_review.png",
    },
    {
      content: <p>It is located right at the centre of kamala nagar market.<br />It is usually crowded and you might need to wait a few minutes to get a table. However, the wait is worth it, as the place has great ambience and you will enjoy your time with your friends and/or family. The staff is also very polite and responsive. The menu was is also great and the price is reasonable for the quantity they serve. Overall, had a good experience at the restaurant.</p>,
      author: "Ankana Saikia",
      rating: 5,
      reviewImage: "./images/ankana_review.png",
    },
    {
      content: <p>This has been my favourite place since 2003.<br /> And I ha ve loved it since then. They have become such a big brand now but the good part is that they haven't compromised with the quality. I love this place and never miss eating Steamed Pork Momos from here. Also don't miss their Exotic Shakes. They are thick and super yum.<br />A must visit for great Chinese Cravings.<br />You can't miss them !!!</p>,
      author: "Medhavi Medz",
      rating: 5,
      reviewImage: "./images/medhavi_review.png",
    },
    {
      content: <p>A very Nice Place to have Chinese at.<br />It is located near McDonald's, Kamla Nagar. It is a very nice place with good interior. The services were fast & Food tasted really good. And a pocket friendly place. Highly satisfied with this. I orderd Chinese Platter, chessy Fries, An ice cream soda and A nutella shake. The Chinese platter comes with great quantity of Manchurian balls, Momos and Fried Rice or Noddles.</p>,
      author: "Tanya Tuteja",
      rating: 5,
      reviewImage: "./images/tanya_review.png",
    },
    {
      content: <p>I kept hearing about this place for a long time.<br />Because i am "food lover", i wanted to go and give this outlet a visit. Finally, i visited the restuarant and i loved this place. Firstly, the crowd and service is great. It is located in a narrow passage but once you taste the food you will forget all the cons. I ordered tandoori momos, garlic noodles, sandwich and all of them were awesome. If I get a chance to visit again, will surely stop by Momos Point.</p>,
      author: "Bharat Jain",
      rating: 5,
      reviewImage: "./images/bharat_review.png",
    },
    {
      content: <p>So few weeks back, I visited the outlet and i must say it too good. Firstly I can talk about the ambience and i must say the place is just too good. You can come here for the good food experience plus good time. I ordered momos and pasta & thetaste of both the are good and the presentation of food is very nice. Just loved the taste of momos and about the pasta, it's not upto the mark.<br />Just liked the food, must visit for the lovely momos.</p>,
      author: "Food Factory",
      rating: 5,
      reviewImage: "./images/food_review.png",
    },
    {
      content: <p>Who doesn't love momo's? <br />This place has been one of my favorite places for momo's outing since 2015. I study in Delhi school of economics which is only 5 minutes away from this place. I visit momo's point whenever I have momo's craving and this place never disappoints. You should try their tandoori and steam chicken momo's. Overall it's a nice place with helpful staff and nice ambience.</p>,
      author: "Himanshu Gupta",
      rating: 5,
      reviewImage: "./images/himanshu_review.png",
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

      <div className='flex flex-col lg:flex-row mt-20 lg:gap-20 gap-2 '>
        {/* <div className='review-btn'> */}
        <div className='w-full lg:w-[600px] 2xl:w-[50%]'>
          <div className='flex gap-6'>
            <button className='change-review-button hidden md:block h-14 p-4 w-14 rounded-full' onClick={handleChangeReview}>
              <img className="w-4 h-4 m-auto" src="./images/prev_icon.png" alt="Previous Icon" />
            </button>

            <div className='reviews-card overflow-hidden mx-auto w-full sm:w-[400px] md:w-[450px] lg:w-[475px] h-auto'>
              <img className='mt-[15px] sm:mt-[20px]' src='./images/commas.png' alt='inverted commas' />
              <p   className='p-6 md:p-6 h-[200px] sm:h-[300px] overflow-auto text-xs sm:text-base'>{currentReviewData.content}</p>
              <img className='mt-[07px] sm:mt-[10px] w-28 h-28' src={currentReviewData.reviewImage} alt='review author' />
              <h3  className='mt-[10px] sm:mt-[15px] uppercase'>{currentReviewData.author}</h3>
              <img className='mt-[10px] sm:mt-[15px]' src='./images/rating.png' alt='5 star rating' />
              <img className='mt-[10px] sm:mt-[15px]' src='./images/google_review.png' alt='Google review' />
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
