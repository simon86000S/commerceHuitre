import React from "react";
import "./Nav.scss";
import { useState ,useContext} from "react";
import { useRef } from "react";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import {Link} from "react-router-dom";
import { UserContext } from '../UserContext'

const Nav = () => {
  const menu = useRef(null);
  const{price,setPrice}=useContext(UserContext)
  const [showMenu, setMenu] = useState(false);

  const ShowMenu = () => {
    if (showMenu == true) {
      setMenu(false);
    } else {
      setMenu(true);
    }
  };

  return (
    <div className="navigation">
      <div onClick={ShowMenu} className="burger">
        <span></span>
        <span></span>
        <span></span>
      </div>
      {showMenu && (
        <div>
          <div ref={menu} className="menu">
            <div className="nav-ul">
              <ul>

               <Link to='/commerceHuitre'>
                  <li>Accueil</li>
                </Link>
                <a href="#presentation">
                  <li>Nos Huitres</li>
                </a>
                <a href="#travaux">
                  <li>Le Producteur</li>
                </a>
                <a href="#activity">
                  <li>Activités</li>
                </a>
                <a href="#competence">
                  <li>Livraison et Frais de port</li>
                </a>
              </ul>
            </div>
          </div>
        </div>
      )}

      <div className="menu-hight-screen">
        <div className="nav-ul">
          <i>
            Appelez-nous au :<br></br> 09 56 15 45 89
          </i>

          <ul>
         
            <Link to="/panier"><li>
            <ShoppingBagIcon className="shop"
                style={{ color: "white", width: "50px", height: "30px" }}
               
              />
               <i style={{background:'black',borderRadius:'100px',height:'100%',width:'100px'}}>{price}</i>
             
             
            </li>
            </Link>
            <Link to='/commerceHuitre'>
                  <li>Accueil</li>
                </Link>
            <a href="#presentation">
              <li>Nos Huitres</li>
            </a>
            <a href="#travaux">
              <li>Le Producteur</li>
            </a>

            <a href="#competence">
              <li>Livraison et Frais de port</li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
