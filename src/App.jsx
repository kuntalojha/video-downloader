import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import NotFound from './page/NotFound';
const App = () => {
  return (
    <div>
      <Header />
      <div className="mx-4 sm:mx-[10%] h-[90vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
