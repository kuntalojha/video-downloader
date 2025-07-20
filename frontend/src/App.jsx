import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import Download from './page/Download';
import NotFound from './page/NotFound';
import Home from './page/Home';
import Video from './page/Video';
import About from './page/About';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="flex-grow mx-4 sm:mx-[10%]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/download" element={<Download />} />
          <Route path="/about" element={<About />} />
          <Route path="/video" element={<Video />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
