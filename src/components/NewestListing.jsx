import React from 'react'
import Card from './Card'

const NewestListings = () => {
  return (
    <div className='newestlistings'>
      <div>
      <h1>Newest listings</h1>
      <p>See the most up-to-date listings</p>
      </div>
      <div className="card-container">
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      </div>
    </div>
  )
}

export default NewestListings
