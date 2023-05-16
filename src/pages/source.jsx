import React from 'react';
import '../App.css'
import logo from '../logo.png';

export const Source = () => {
  return (
    <div className={"container"}>
      <header className="App-header">
        <img src={logo} alt="Logo" className={"logo"} />
        <h1 className={"title"}>Sources</h1>
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
      </main>
      <footer className={"footer"}>
        <p> 2023 Sapphire Helak</p>
      </footer>
    </div>
  );
};

export default Source;