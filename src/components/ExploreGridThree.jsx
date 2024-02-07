import React from 'react';
import { Link } from 'react-router-dom';
import { cards } from '../../lib/data';
import '../../sassStyles/_global.scss';

const ExploreGridThree = () => {
  return (
    <div>
      <div className='explore'>
        <div>
          <h1>Rentals with in-unit laundry</h1>
          <p className='link'><Link to="/">View Rentals with in-umit laundary</Link></p>
        </div>
        <div className="card-container">
          {cards.rentFriendlyData?.map((card) => {
            return (
              <div key={card.id} className='card'>
                <div className="card-img">
                  <img src={card?.icon} alt="" />
                  <img src={card?.img} alt="" />
                </div>
                <div className="card-body">
                  <p className='apartment'>{card?.cardName}</p>
                  <div>
                    <h3>₦{card.priceFro} - ₦{card.priceTo}</h3>
                    <div>
                    <span className='bed-bath'>
                      {card?.bed}
                      </span> <span className='bed'>bed</span>          
                      <span className='bed-bath'>
                      {card?.bath}
                      </span> <span className='bath'>bath</span>
                    </div>                    <p>{card?.location}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ExploreGridThree;
