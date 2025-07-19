import React from 'react';
import HeroSection from '../components/HeroSection';

const Home = () => {
  const [time, setTime] = React.useState(new Date().toLocaleTimeString());
  React.useEffect(() => {
    const interval = setInterval(
      () => setTime(new Date().toLocaleTimeString()),
      1000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="text-2xl font-medium mt-10 mb-10">
        <marquee>Welcome here! Today is {time}</marquee>
      </div>
      <HeroSection />
      <div>Downlode section</div>
    </div>
  );
};

export default Home;
