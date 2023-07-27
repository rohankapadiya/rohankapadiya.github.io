import React from "react";
import './Mainsection.css'
import RohanImg from './image2.png';
function Mainsection(){


    return(
            <div className="Mainsection">
                <div className="home-page-img">
                <div class="homepage-container">
  <div class="box">
    <div class="spin-container">
      <div class="shape">
        <div class="bd"></div>
      </div>
     </div>
  </div>
</div>
                </div>
            <div className="Home-page" >
                <div>
                <p className="first-p">I'm</p></div>
                <div className="content">
                <h2 className="second-p">Rohan</h2>
                <h2 className="second-p">Rohan</h2>
                </div><div>
                <p aria-label="Web developer" className="third-p"><span class="typewriter"></span>
                </p></div>

                {/* <div>
                <p className="forth-p">Motivated and detail-oriented Junior Developer with practical experience in software development</p></div> */}
            </div>         
           
            </div>

        );
}
export default Mainsection;