import React from 'react'
import CardLoveIcon from '../assets/images/card-love.png'
import CardBg from '../assets/svg/apartment-1.svg'
import '../../sassStyles/_global.scss';

const Card = ({card}) => {
 
  return (
    <div className='card'>
    <div className="card-img">
      <img src={card?.icon} alt="" />
      <img  src={card?.img} alt="" />
    </div>
    <div className="card-body">
      <p className='apartment'>{card?.cardName}</p>
      <div>
        <h3>₦{card.price}</h3>
        <div><span>{card?.propDescription}</span>{card?.path || exploreCard?.path} <span>{card?.measurement || exploreCard?.measurement}</span>{card?.area || exploreCard?.area}</div>
        <p>{card?.location}</p>
      </div>
    </div>
  </div>
  )
}

export default Card
