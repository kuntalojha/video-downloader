import React from 'react';
import HeroSection from '../components/HeroSection';
import Download from '../components/Download';
import About from '../components/About';
import useDateTime from '../hooks/useDateTime';

const Home = () => {
  const time = useDateTime();

  return (
    <div>
      <div className="text-2xl font-medium mt-25 mb-10">
        <marquee>Welcome here! Today is {time}</marquee>
      </div>
      <HeroSection />
      <div className="download">
        <Download />
      </div>
      <div className="about">
        <About />
      </div>
    </div>
  );
};

export default Home;
