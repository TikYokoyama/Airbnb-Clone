import React from "react"
import star from "../images/Star 1.png"
// import data from "../data"


export default function Card(prop) {
    console.log(prop);
    return (

            <div className="card--item">
                <img className="card--photo" src={prop.img} alt="natacao" />
                <div className="card--ratings">
                    <img className="card--star" src={star} alt="star" />
                    <p className="card--text">{prop.text1}</p>
                    <p id="grey" className="card--text">{prop.text2}</p>
                </div>
                <div className="card--infos">
                    <p className="card--text">{prop.info}</p>
                </div>
                <div className="card--price">
                    <p className="card--text"><strong>{prop.price}</strong> / person</p>
                </div>
            </div>
    )
}