import React from 'react';
import Header from './graphic/header';
import Content from './graphic/content';
import Footer from './graphic/footer';

const Graphic = () => {
  return (
    <div className="container">
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default Graphic;