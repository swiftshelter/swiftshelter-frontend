import React, { useState } from 'react'
import NewestListing from '../components/NewestListing'
import ExploreCitiesWrapper from '../components/ExploreCitiesWrapper'
import Nav from '../components/Nav/nav'
import Hero from '../components/Hero/hero'
import UserAuth from '../components/UserAccess'



const Home = () => {
  const [showForm, setShowForm]= useState(false)

  const handleVisiblity = ()=>{
    setShowForm((pre)=>!pre)
    console.log("Navbar")
  }
  return (
    <div className='home'>
      <div className={!showForm ? "hiddepop" : "user-auth"}>
        <UserAuth showForm={showForm} handleVisiblity={handleVisiblity} />
      </div>
      <Nav handleVisiblity={handleVisiblity}/>
      <Hero />
      <div className="x-spacing">
        <NewestListing/>
      </div>
      <ExploreCitiesWrapper/>
    </div>
  )
}

export default Home
