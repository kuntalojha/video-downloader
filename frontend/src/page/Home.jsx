import React from 'react';
import HeroSection from '../components/HeroSection';
import useDateTime from '../hooks/useDateTime';

const Home = () => {
  const time = useDateTime();

  return (
    <div>
      <div className="text-2xl font-medium mt-25 mb-10">
        <marquee>Welcome here! Today is {time}</marquee>
      </div>
      <HeroSection />
    </div>
  );
};

export default Home;
