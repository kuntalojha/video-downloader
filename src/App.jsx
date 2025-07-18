import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import Header from './components/Header';
import Footer from './components/Footer';
const App = () => {
  return (
    <div>
      <Header />
      <div className="mx-4 sm:mx-[10%]">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
