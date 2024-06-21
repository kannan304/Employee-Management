import React from 'react'
import style from "./Home.module.css"

const AboutUs = () => {
  return (
    <div id={style.Aboutus}>
      <div className={style.ContainerBox}>
        <div className={style.Title}>
            <p> Tata Consultancy Services Limited- (TCS) </p>
        </div>
        <div className={style.About}>
            <p>Tata Consultancy Services Limited (TCS) is an Indian multinational information technology (IT) services and consulting company headquartered in Mumbai. It is a part of the Tata Group and operates in 150 locations across 46 countries. </p>
        </div>
      </div>
      <div className={style.ContainerBox}>
        <div className={style.Title}>
            <p>Western India Palm Refined Oils Limited  </p>
        </div>
        <div className={style.About}>
            <p>Wipro helps North America do business better through industry-wide experience, deep technology expertise, comprehensive portfolio of services, a vertically-aligned business model, and persistent innovation. </p>
        </div>
      </div>
      <div className={style.ContainerBox}>
        <div className={style.Title}>
            <p> Information System -(Infosys)  </p>
        </div>
        <div className={style.About}>
            <p>Infosys is a global leader in next-generation digital services and consulting. We enable clients in more than 56 countries to navigate their digital transformation.</p>
        </div>
      </div>
      <div className={style.ContainerBox}>
        <div className={style.Title}>
            <p>International Business Machines Corporation </p>
        </div>
        <div className={style.About}>
            <p>The International Business Machines Corporation (using the trademark IBM), nicknamed Big Blue,[6] is an American multinational technology corporation headquartered in Armonk, New York and is present in over 175 countries.[7][8]</p>
        </div>
      </div>
      
    </div>
  )
}

export default AboutUs
