import React from 'react'
import Card from './Card'
import { cards } from './../../lib/data';

const NewestListings = ({handleVisibility}) => {
  return (
    <div className='newestlistings'>
      <div>
      <h1 onClick={handleVisibility}>Newest listings</h1>
      <p>See the most up-to-date listings</p>
      </div>
      <div className="card-container">
        {cards.newestListingData?.map((card)=>{
          return(
            <div key={card.id}>
            <Card card={card} key={card?.id}/>
            </div >
          )
        })}
      </div>
    </div>
  )
}

export default NewestListings
