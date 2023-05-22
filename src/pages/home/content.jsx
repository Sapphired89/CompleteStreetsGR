import React from 'react';
import './Home.css'

const Content = () => {
  return (
    <main className="flexContainer">
        <section className={"flexItem"}>
          <h2>Main Focus</h2>
          <ul>
            <li>
              <a href="https://goo.gl/maps/xVhKUSXQddN7UrZN9">Jefferson Ave</a>
            </li>
            <li>
              <a href="https://goo.gl/maps/xVhKUSXQddN7UrZN9">Museum High School</a>
            </li>
            <li>
              <a href="https://goo.gl/maps/3HqH2i1rHtGbgjDn9">State St</a>
            </li>
            <li>
              <a href="https://www.grandrapidsmi.gov/Home">GR, MI</a>
            </li>
          </ul>
        </section>
        <section className={"flexItem"}>
          <h2>Importance of This Road</h2>
          <p>This road is one that many students cross, near every day. Its also a main road for students and staff to access the school.</p>
        </section>
        <section className={"flexItem"}>
          <h2>What Holds Us Back?</h2>
          <p>The fact of funding issues, lack of contact within the City Government, & issues with action.</p>
        </section>
        <section className={"flexItem"}>
          <h2>Our mission</h2>
          <p>Our mission is to study road safety, learn what it means to have a pedestrian safe road, and create a safe space for both the driver and the pedstrain.</p>
        </section>
        <section className={"flexItem"}>
          <h2>Credit</h2>
          <p>Credit goes to Nate Langel for the spearhead of this initiative, And any community members we've contacted.</p>
        </section>
      {/* Add other sections here */}
    </main>
  );
};

export default Content;
