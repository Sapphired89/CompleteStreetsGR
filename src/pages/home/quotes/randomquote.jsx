import React, { useState, useEffect } from 'react';
import { quotes } from './quotes';

const RandomQuote = () => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    generateRandomQuote();
  }, []);

  const generateRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    setQuote(randomQuote);
  };

  return (
    <div>
      <header>
      <h4>{quote.text}</h4>
      <h4>{quote.author}</h4>
      </header>
    </div>
  );
};

export default RandomQuote;
