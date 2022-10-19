import React, { useState } from "react";
import "./Row.scss";

function Row() {
  const [img, setImg] = useState([
    {
      text1: "bourriche",
      img2:
        "https://petitfute.twic.pics/medias/professionnel/1944406/premium/originale/5fc147d77d9af-huitres-le-guen-chaumard-medaillees-d-or.png?twic=v1/cover=780x520",
     
      img3:
        " https://images.pexels.com/photos/8352052/pexels-photo-8352052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      
      img4:
        "https://media-cdn.tripadvisor.com/media/photo-m/1280/13/48/07/bd/huitre-creuse-n-3.jpg",
 
      img5:
        "https://media.istockphoto.com/photos/closeup-photo-of-hooves-of-a-saddle-horse-on-animal-farm-at-rural-picture-id1164202399?k=20&m=1164202399&s=612x612&w=0&h=30cxx9lL_u4BJVG4Z-2HlBDydnRZp-dGnbAeFruBo58=",
      img6:
        "https://media.istockphoto.com/photos/fresh-large-oysters-in-male-hands-on-a-dark-background-delicious-picture-id1174083195?k=20&m=1174083195&s=612x612&w=0&h=-jtoXFml7tEQzm1MpsLUi_e0srPvEBtUsKfPL7LK2cw=",
    },

    {
      text1: "huitres creuse",
      img2:
        "https://petitfute.twic.pics/medias/professionnel/1944406/premium/originale/5fc147d77d9af-huitres-le-guen-chaumard-medaillees-d-or.png?twic=v1/cover=780x520",
      img3:
        " https://images.pexels.com/photos/8352052/pexels-photo-8352052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      img4:
        "https://media-cdn.tripadvisor.com/media/photo-m/1280/13/48/07/bd/huitre-creuse-n-3.jpg",
      img5:
        "https://media.istockphoto.com/photos/closeup-photo-of-hooves-of-a-saddle-horse-on-animal-farm-at-rural-picture-id1164202399?k=20&m=1164202399&s=612x612&w=0&h=30cxx9lL_u4BJVG4Z-2HlBDydnRZp-dGnbAeFruBo58=",
      img6:
        "https://media.istockphoto.com/photos/fresh-large-oysters-in-male-hands-on-a-dark-background-delicious-picture-id1174083195?k=20&m=1174083195&s=612x612&w=0&h=-jtoXFml7tEQzm1MpsLUi_e0srPvEBtUsKfPL7LK2cw=",
    },
    {
      text1: "huitres plates",

      img2:
        "https://petitfute.twic.pics/medias/professionnel/1944406/premium/originale/5fc147d77d9af-huitres-le-guen-chaumard-medaillees-d-or.png?twic=v1/cover=780x520",
      img3:
        " https://images.pexels.com/photos/8352052/pexels-photo-8352052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      img4:
        "https://media-cdn.tripadvisor.com/media/photo-m/1280/13/48/07/bd/huitre-creuse-n-3.jpg",
      img5:
        "https://media.istockphoto.com/photos/closeup-photo-of-hooves-of-a-saddle-horse-on-animal-farm-at-rural-picture-id1164202399?k=20&m=1164202399&s=612x612&w=0&h=30cxx9lL_u4BJVG4Z-2HlBDydnRZp-dGnbAeFruBo58=",
      img6:
        "https://media.istockphoto.com/photos/fresh-large-oysters-in-male-hands-on-a-dark-background-delicious-picture-id1174083195?k=20&m=1174083195&s=612x612&w=0&h=-jtoXFml7tEQzm1MpsLUi_e0srPvEBtUsKfPL7LK2cw=",
    },
  ]);
  const increment = () => {};

  return (
    <div className="oyesters-Row">
      <div className="wrapper-Row">
        {img.map((img) => {
          return (
            <div>
              <div className="wrapper-list-Row">
                <div className="img-Row">
                  <p>{img.text1}</p>

                  <img src={img.img2}></img>

                  <img src={img.img3}></img>
                  <img src={img.img4}></img>
                  <img src={img.img5}></img>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Row;
