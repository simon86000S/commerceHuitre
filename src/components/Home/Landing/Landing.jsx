import React, { useState } from "react";

import huitre from "../../assets/img/huitrecreusebaie.jpg";
import huitre2 from "../../assets/img/huitre2.jpg";
import huitreeat from "../../assets/img/huitreeats.jpeg";
import bourriche from "../../assets/img/bourriche.jpg";
import photo3 from "../../assets/img/photo5.jpg";
import photo4 from "../../assets/img//photo6.jpeg";
import mer from "../../assets/img/photo7.jpeg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Landing.scss";
import Oyester from '../List-oyester/Oyester'
function Landing() {
  return (
    <div className="Landing">
      <div className="container">
        <div className="list">
        <h1 className="title-list">Meilleur Ventes</h1>
        <Oyester/>
          
          
        </div>

        <div className="carrousel">
          <Carousel
            infiniteLoop
            autoPlay
            thumbWidth={150}
            showStatus=""
            showThumbs=""
          >
            <div>
              <img src={huitre} />
              <p className="legend">huitre plate classe 2</p>
            </div>
            <div>
              <img src={huitre2} />
              <p className="legend">Huitre creuse</p>
            </div>
            <div>
              <img src={huitreeat} />
              <p className="legend">Bourriche</p>
            </div>
            <div>
              <img src={photo3} />
              <p className="legend">Huitre plate</p>
            </div>
            <div>
              <img src={photo4} />
              <p className="legend">Huitre Française</p>
            </div>
          </Carousel>
        </div>
    
      </div>
      
    </div>
  );
}

export default Landing;
