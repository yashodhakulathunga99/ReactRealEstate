import React from 'react'
import './GetStarted.css'

const GetStarted = () => {
  return (
    <section className="g-wrapper">
        <div className="paddings innerWidth g-container">
            <div className="flexCenter inner-container">
                <span className="primaryText">Get Started with RealMetrix</span>
                <span className="secondaryText">Subscribe and find super attractive price quptes from us.
                    <br/>
                Find your property soon.
                </span>
               <button className="buttonlast">
                 <a href="mailto:realmatrix@gmail.com">Get Started</a>
                </button> 
            </div>
        </div>
    </section>
  )
}

export default GetStarted