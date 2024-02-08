import React from 'react'
import '../../sassStyles/_global.scss';
import ExploreGridOne from './ExploreGridOne';
import ExploreGridTwo from './ExploreGridTwo';
import ExploreGridThree from './ExploreGridThree';
import ExploreGridFour from './ExploreGridFour';


const ExploreCitiesWrapper = () => {
  return (
    <div className='explore-cities'>
        <h1 className='title'>Explore Abuja, AZ</h1>
        <ExploreGridOne/>
        <ExploreGridTwo/>
        <ExploreGridThree/>
        <ExploreGridFour/>
    </div>
  )
}

export default ExploreCitiesWrapper
