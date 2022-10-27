import React, { useState } from "react";
//import React, { useEffect, useState } from "react";
import { Router } from "./routes/Index";
import { MainContext } from "./context/Index";
import { InitialAnimation } from "./components/initial_animation/Index";
// import Aos from "aos";
// import "aos/dist/aos.css";
import "./App.css";

function App() {
    const [endAnimation, setEndAnimation] = useState(false)

    // useEffect(() => {
    //     Aos.init({ duration: 1000 });
    // }, []);
    // /assets/images/1.jpg

    
    // close initial animation
    setTimeout(() => {
        setEndAnimation(true);
    }, 1500);


    return (
        <MainContext>
            <div className="app">
                {
                    endAnimation ? <Router /> : <InitialAnimation />
                }
                
            </div>
        </MainContext>
    );
}

export default App;
