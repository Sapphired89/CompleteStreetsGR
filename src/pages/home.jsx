import React from 'react';
import Header from './home/header';
import Content from './home/content';
import Footer from './home/footer';

const Home = () => {
  return (
    <div className="container">
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default Home;