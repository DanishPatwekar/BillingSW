import React from 'react'
import loadingvideo from '/loadingvideo.mp4'
import './loading.css'
const Loading = () => {
  return (
    <div className='main'>
        <h3>Relax, <span>No stress,</span> just adventure.</h3>
     <video width="900" autoPlay 
        muted  >
        <source src={loadingvideo} type="video/mp4" />
      </video>
      <h2>Let's head to our dream island!</h2>
    </div>
  )
}

export default Loading
