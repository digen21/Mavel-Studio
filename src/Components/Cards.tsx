import React from "react";
function Card(props: any) {
  return (
    <>
      <div className="--hero-card">
        <img src={props.item.coverImg} alt="" />
        <div className="--card-stats">
          <img src="/star.png" alt="" className="star" />
          <span className="rating">{props.item.stats.rating}</span>
          <span className="gray">({props.item.stats.reviewCount})</span>
          <span className="gray">{props.item.location}</span>
        </div>
        <p className="--hero-title">{props.item.title} :</p>
        <div className="--hero-desc">
          <span className="desc">{props.item.description}</span>
        </div>
        <div className="--card-footer">
          <p className="--hero-price">
            <span className="bold"> From ${props.item.price}</span>
          </p>
          <span className="--trailer-btn">
            Watch Trailer <i className="uil uil-play"></i>
          </span>
        </div>
      </div>
    </>
  );
}

export default Card;
