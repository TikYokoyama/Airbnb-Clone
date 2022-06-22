import React from "react"

export default function Card(props) {
    // console.log(props.openSpots);

    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }

    return (

            <div className="card--item">
                {badgeText && <div className="card--badge">{badgeText}</div>}
                <img className="card--photo" src={`../images/${props.item.coverImg}`} alt="natacao" />
                <div className="card--ratings">
                    <img className="card--star" src="../images/Star 1.png" alt="star" />
                    <span>{props.item.stats.rating}</span>
                    <span className="card--text" id="gray">({props.item.stats.reviewCount}) • </span>
                    <span className="card--text" id="gray">{props.item.location}</span>
                </div>
                <div className="card--infos">
                    <p className="card--text">{props.item.title}</p>
                </div>
                <div className="card--price">
                    <p className="card--text"><strong>From {props.item.price}</strong> / person</p>
                </div>
            </div>
    )
}