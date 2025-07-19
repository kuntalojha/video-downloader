import React from 'react';
import HeroSection from '../components/HeroSection';
import Download from '../components/Download';
import About from '../components/About';

const Home = () => {
  const [time, setTime] = React.useState(
    new Date().toLocaleString('en-IN', {
      dateStyle: 'full',
      timeStyle: 'medium',
    })
  );

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTime(
        new Date().toLocaleString('en-IN', {
          dateStyle: 'full',
          timeStyle: 'medium',
        })
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="text-2xl font-medium mt-10 mb-10">
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
