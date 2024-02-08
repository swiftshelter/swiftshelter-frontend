import React from 'react'
import NewestListing from '../components/NewestListing'
import ExploreCitiesWrapper from '../components/ExploreCitiesWrapper'
import Nav from '../components/Nav/nav'
import Hero from '../components/Hero/hero'



const Home = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <div className="x-spacing">
        <NewestListing/>
      </div>
      <ExploreCitiesWrapper/>
    </div>
  )
}

export default Home
