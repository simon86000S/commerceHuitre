import React from "react";
import "./Aside.scss";
import huitre2 from "../../assets/img/huitre2.jpg";
import plat from "../../assets/img/photo7.jpeg";
import huitre from "../../assets/img/huitrecreusebaie.jpg";
function Aside() {
  return (
    <div className="container-Aside">
      <h1 className="title-aside">Notre sélection</h1>

      <div className="card">
        <div className="card1">
        <div className="container1">
        <div className="background1">
          <h1>Qualité</h1>
          <img src={plat}></img>
        </div>
      </div>
        </div>
     

      <div className="card2">
      <div className="background">
          <h1>sélection</h1>
          <img src={huitre}></img>
          
      </div>
      </div>
      </div>
    </div>
  );
}

export default Aside;
