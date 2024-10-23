import React from 'react'
import './home.css'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <>
      <div className="box">
            <h2>Welcome To  </h2>
            <h2>Billing & invocing</h2>
            <p>Your Complete Billing & Invocing Solution</p>
            <Link to="/SignUp"><button id='startnow'>Start Now</button></Link>
      </div>
    </>
  )
}

export default Home
