import React from 'react';
import './Home.css'
import RandomQuote from './quotes/randomquote'

const Header = () => {
  return (
    <header className="App-header">
      <h1 className="title">Complete Streets</h1>
      <RandomQuote />
    </header>
  );
};

export default Header;
