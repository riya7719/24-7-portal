import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import avatar from '../../assets/images/avatar.jpg';
import 'swiper/css';
import 'swiper/css/pagination';
import  './customerreviews.css'; // Import your CSS file
import { Autoplay, Pagination } from 'swiper/modules';
import headingmargin from '../../assets/images/heading-margin.png'

const reviewsData = [
  {
    name: 'Suraj Jadhav',
    avatar: avatar,
    review:
      'Absolutely love working at coffice24x7! The atmosphere is vibrant, the facilities are top notch and the community is incredibly supportive.',
  },
  {
    name: 'Rupal Yadav',
    avatar: avatar,
    review:
      'Have been using coffice since a year now, incredible facilities and the work environment is superb.',
  },
  {
    name: 'Pravin Pimpale',
    avatar: avatar,
    review:
      'Very comfortable place for all coworkers, I like to be working here, it is a well equipped place.',
  },
  {
    name: 'Pooja',
    avatar: avatar,
    review:
      'Great place to work and meet new people, the environment is comfortable and really insightful experience.',
  },
  {
    name: 'Suraj Jadhav',
    avatar: avatar,
    review:
      'Absolutely love working at coffice24x7! The atmosphere is vibrant, the facilities are top notch and the community is incredibly supportive.',
  },
  {
    name: 'Suraj Jadhav',
    avatar: avatar,
    review:
      'Absolutely love working at coffice24x7! The atmosphere is vibrant, the facilities are top notch and the community is incredibly supportive.',
  },
];

const ReviewCard = ({ name, avatar, review }) => {
  return (
    <div className="reviewCard">
      <div className="reviewText">{review}</div>
      <div className="reviewer">
        <div className="reviewerAvatar">
          <img src={avatar} alt={name} />
        </div>
       
      </div>
      <div className="reviewerName">{name}</div>
    </div>
  );
};

const Reviews = () => {
  

  return (
    <div className="reviewsSection">
      <div className="reviewsHeader">
        <h2 className="reviewsTitle"><img src={headingmargin} alt="headingmargin" />CUSTOMER'S REVIEWS</h2>
        <p className="reviewsSubtitle">
          See what our customers have to say about their experience.
        </p>
      </div>
      <Swiper
        spaceBetween={30}
        slidesPerView={4} // Show only one card at a time
        centeredSlides={true}
        loop={true} // Enable infinite loop
        autoplay={{ delay: 3000 }}
        modules={[Autoplay,Pagination]} // Import and use Pagination module
        pagination={{ clickable: true }}
      >
        {reviewsData.map((review, index) => (
          <SwiperSlide key={index}>
            <ReviewCard {...review} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;