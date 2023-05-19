import React from 'react';
import '../App.css'
import Age from '../pages/InfoGraphics/Age.png'
import Year from '../pages/InfoGraphics/Year.png'
import Fatal from '../pages/InfoGraphics/Fatal.png'
import Local from '../pages/InfoGraphics/Local.png'

export const Graphic = () => {
    return (
        <div className={"container"}>
            <header className="App-header">
                <h1 className={"title"}>Info Graphic</h1>
            </header>
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
                <footer className={"footer"}>
                    Sources: NSC.org, michigan.gov
                </footer>
            </main>
        </div>
    );
};
    
export default Graphic;