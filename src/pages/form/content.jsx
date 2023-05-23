import React, { useEffect } from 'react';
import './Form.css';
import museum from './museumlogo/museum.png';

const Content = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://embed.typeform.com/next/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <main className="flexContainer">
      <section className="flexItem">
      <img src={museum} alt="museumlogo.png" className='museum' />
        <div
          data-tf-widget="M9NyHV3O"
          data-tf-opacity="100"
          data-tf-iframe-props="title=completestreetsgr"
          data-tf-transitive-search-params
          data-tf-medium="snippet"
          style={{ width: '100%', height: '500px' }}
        ></div>
      </section>
    </main>
  );
};

export default Content;

