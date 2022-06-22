import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
// import data from "./data"

// console.log(data);

export default function App() {

    const natacao = require('./images/natacao.png')
    const wedding = require('./images/wedding-photography 1.png')
    const bike = require('./images/mountain-bike 1.png')
            
    return (
        <div>
            <Navbar />
            <Hero />
            <div className="cards">
                <Card img={natacao} text1="5.0" text2="(6).USA" info="Life lessons with Katie Zaferes" price="From $136"/>
                <Card img={wedding} text1="5.0" text2="(30).USA" info="Learn wedding photography" price="From $195"/>
                <Card img={bike} text1="5.0" text2="(6).USA" info="Group Mountain Biking" price="From $136"/>
            </div>
        </div>
    )
}