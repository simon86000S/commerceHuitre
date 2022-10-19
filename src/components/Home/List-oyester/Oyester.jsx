import React, { useState } from "react";
import huitre from "../../assets/img/huitrecreusebaie.jpg";
import "./Oyester.scss";
function Oyester() {
  const [img, setImg] = useState([
    {
      price: 30,
      img1:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE6fG7QYmyTJpkyKUUdFZspD_PzaH0kgxipA&usqp=CAU",
      img2:
        "https://www.france-voyage.com/visuals/photos/huitre-bassin-arcachon-31566_w600.webp",
      img3:
        "https://images.pexels.com/photos/11479637/pexels-photo-11479637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      img4:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4BoKiGDqfD761MJhLFWhqcFueCVe7dXW1qrvRxp-2UsARFSNDbKbTck2UWVfFmNk3ydE&usqp=CAU",
    },
  ]);

  return (
    <div className="oyesters">
      <div className="wrapper">
        {img.map((img) => {
          return (
            <div>
              <div className="wrapper-list">
                <div>
                  <img src={img.img1}></img>
                  <img src={img.img2}></img>
                  <img src={img.img3}></img>
                  <img src={img.img4}></img>
                  
                </div>
              
              </div>
            </div>
          );
        })}
      <p>Où sont élevées les huîtres ? Elles se déclinent en douze grands crus bretons, élevés dans les viviers sur tout le territoire : Cancale, Paimpol, Tréguier, Morlaix-Penzé, Rade de Brest, les Abers, Aven Belon, Etel, Quiberon, Golfe du Morbihan, Penerf, le Croisic, sans oublier les huîtres sauvages de Rhuys. On distingue les huîtres creuse, en élevage ou sauvages et les huîtres plates au petit goût de noisette.
Quand les savourer ? Laiteuse ou pas, c’est une histoire de goût ! Consommation les mois en « R » ? Voici une petite explication de texte : de mai à août, en pleine période de reproduction, les huîtres produisent de la laitance qui n’enlève en rien le goût et les qualités nutritionnelles de l’huître.  </p>  
        
      </div>
    </div>
  );
}

export default Oyester;
