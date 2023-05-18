import React from 'react';
import '../App.css'
import logo from '../logo.png';

export const Source = () => {
  return (
    <div className={"container"}>
      <header className="App-header">
        <img src={logo} alt="Logo" className={"App-Logo"} />
        <h1 className={"title"}>Info</h1>
      </header>
      <main className={"flexContainer"}>
        <section className={"flexItem"}>
          <h2>Main Resources</h2>
          <li>
              <a href="https://goo.gl/maps/xVhKUSXQddN7UrZN9">Jefferson Ave</a>
          </li>
          <li>
            Continue
          </li>
        </section>
        <section className={"flexItem"}>
          <h2>Any Extra Info.</h2>
          <p>-Add on-</p>
        </section>
        <section className={"flexItem"}>
          <h2>Any Questions, or want to become a community partner?</h2>
          <p>Contact- langeln@students.grps.org Or helakjack@gmail.com</p>
        </section>
      </main>
      <footer className={"footer"}>
        2023 Sapphire Helak
      </footer>
    </div>
  );
};

export default Source;