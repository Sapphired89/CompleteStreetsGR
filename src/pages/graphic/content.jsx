import React from 'react';
import './Graphic.css'
import Age from './InfoGraphics/Age.png'
import Year from './InfoGraphics/Year.png'
import Fatal from './InfoGraphics/Fatal.png'
import Local from './InfoGraphics/Local.png'


const Content = () => {
    return (
        <main className={"flexContainerimg"}>
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
        </main>
    );
};

export default Content;