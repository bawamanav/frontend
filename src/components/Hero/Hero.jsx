import React from 'react'
import "./Hero.css"
// import hand_icon from "../assets/hand_icon.png"
import arro_icon from "../assets/arrow.png"
// import hero_image from "../assets/hero_image.png"

export const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>
                NEW ARRIVALS ONLY
            </h2>
            <div>
                <p>NEW</p>
                {/* <div className="hero-hand-icon">
                    <p>new</p>
                    <img src = "https://static.vecteezy.com/system/resources/previews/000/350/310/original/handshake-vector-icon.jpg" alt=""/>
                </div> */}
                <p>Collections</p>
                <p>for everyone!</p>
            </div>
            <div className="hero-latest-button">
                <div>Latest Collection</div>
                <img src = {arro_icon} alt ="" />
            </div>
        </div>
        <div className="hero-right">
            <img src= "https://cdna.lystit.com/photos/boohooman/a3624f80/boohooman-designer-black-Bonded-Scuba-Oversized-Hoodie.jpeg" alt="" />
        </div>
    </div>
  )
}
