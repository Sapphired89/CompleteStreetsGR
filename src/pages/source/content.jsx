import React from 'react';
import './Source.css'

const Content = () => {
    return (
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
    );
};

export default Content;