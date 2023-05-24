import React from 'react';
import './Graphic.css'
import Age from './InfoGraphics/Age.png'
import Year from './InfoGraphics/Year.png'
import Fatal from './InfoGraphics/Fatal.png'
import Local from './InfoGraphics/Local.png'
import { Link } from 'react-router-dom';


const Content = () => {
    return (
        <main className={"flexContainerimg"}>
            <section className="flexItem">
                <h2>Main Resources</h2>
                    <li>
                        <a href="https://goo.gl/maps/xVhKUSXQddN7UrZN9">Jefferson Ave</a>
                    </li>
            </section>
            <div className={"flexItem"}>
                <h2>Death by cars, by Year</h2>
                <img src={Year} alt="Year" style={{ maxWidth: '100%', height: 'auto' }} />
            </div>
            <div className={"flexItem"}>
                <h2>Death by cars, by Age</h2>
                <img src={Age} alt="Age" style={{ maxWidth: '100%', height: 'auto' }} />
            </div>
            <div className={"flexItem"}>
                <h2>Car crashes</h2>
                <img src={Fatal} alt="Fatal" style={{ maxWidth: '100%', height: 'auto' }} />
            </div>
            <div className={"flexItem"}>
                <h2>Local data from downtown</h2>
                <img src={Local} alt="Local" style={{ maxWidth: '100%', height: 'auto' }} />
            </div>
            <section className="flexItem">
                <h2>Any Extra Info.</h2>
                <p>Our focus may be on Jefferson, but it can also be on many other streets in the GR area.</p>
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