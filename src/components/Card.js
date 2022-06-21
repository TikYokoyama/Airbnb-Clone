import React from "react"
import natacao from "../images/natacao.png"
import wedding from "../images/wedding-photography 1.png"
import bike from "../images/mountain-bike 1.png"
import star from "../images/Star 1.png"



export default function Card() {
    return (
        <section className="cards">

            <div className="card--item">
                <img src={natacao} alt="natacao" />
                <div className="card--ratings">
                    <img src={star} alt="star" />
                    <p>5.0</p>
                    <p>(6)</p>
                    <p>.</p>
                    <p>USA</p>
                </div>
                <div className="card--infos">
                    <p>Life lessons with Katie Zaferes</p>
                </div>
                <div className="card--price">
                    <p><strong>From $136</strong> / person</p>
                </div>
            </div>

            <div className="card--item">
                <img src={wedding} alt="natacao" />
                <div className="card--ratings">
                    <img src={star} alt="star" />
                    <p>5.0</p>
                    <p>(30)</p>
                    <p>.</p>
                    <p>USA</p>
                </div>
                <div className="card--infos">
                    <p>Learn wedding photography</p>
                </div>
                <div className="card--price">
                    <p><strong>From $136</strong> / person</p>
                </div>
            </div>

            <div className="card--item">
                <img src={bike} alt="natacao" />
                <div className="card--ratings">
                    <img src={star} alt="star" />
                    <p>4.8</p>
                    <p>(2)</p>
                    <p>.</p>
                    <p>USA</p>
                </div>
                <div className="card--infos">
                    <p>Group Mountain Biking</p>
                </div>
                <div className="card--price">
                    <p><strong>From $136</strong> / person</p>
                </div>
            </div>

        </section>
    )
}