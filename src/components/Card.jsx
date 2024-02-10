import React from "react";
import CardLoveIcon from "../assets/images/card-love.png";
import CardBg from "../assets/svg/apartment-1.svg";
import "../../sassStyles/_global.scss";

const Card = ({ card }) => {
  return (
    <article role="article" className="card">
      <div className="card-img" role="presentation">
        <img src={card?.icon} alt={`${card?.cardName} Icon`} />
        <img src={card?.img} alt={`${card?.cardName} Image`} />
      </div>
      <div className="card-body">
        <p className="apartment">{card?.cardName}</p>
        <div>
          <h3>₦{card.price}</h3>
          <div>
            <span>{card?.propDescription}</span>
            {card?.path || exploreCard?.path}
            <span>{card?.measurement || exploreCard?.measurement}</span>
            {card?.area || exploreCard?.area}
          </div>
          <address aria-label="location">{card?.location}</address>
        </div>
      </div>
    </article>
  );
};

export default Card;
