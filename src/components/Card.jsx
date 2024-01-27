import React from 'react'
import CardLoveIcon from '../assets/images/card-love.png'
import CardBg from '../assets/svg/apartment-1.svg'
import '../../sassStyles/_global.scss';

const Card = () => {
  return (
    <div className='card'>
        <div className="card-img">
            <img src={CardLoveIcon} alt="" />
            <img src={CardBg} alt="" />
        </div>
        <div className="card-body">
        <p className='apartment'>Apartment</p>
        <div>
            <h3>$750</h3>
            <div><span>Studio</span>1path <span>500</span>sqft</div>
            <p>817 S Main St Apt F</p>
            <p>Eaton Rapids, MI 48827</p>
        </div>
        </div>

      
    </div>
  )
}

export default Card
