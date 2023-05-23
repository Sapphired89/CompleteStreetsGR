import React from 'react';
import './Source.css';
import { Link } from 'react-router-dom';

const Content = () => {
  return (
    <main className="flexContainer">
      <section className="flexItem">
        <h2>Main Resources</h2>
        <li>
          <a href="https://goo.gl/maps/xVhKUSXQddN7UrZN9">Jefferson Ave</a>
        </li>
        <li>Continue</li>
      </section>
      <section className="flexItem">
        <h2>Any Extra Info.</h2>
        <p>-Add on-</p>
      </section>
      <section className="flexItem">
        <h2>Any Questions, or want to become a community partner?</h2>
        <li>
          <Link to="/form">Contact us</Link>
        </li>
      </section>
    </main>
  );
};

export default Content;
