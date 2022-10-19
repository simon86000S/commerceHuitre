import React,{useContext} from 'react';
import '../Price/Price.scss';
import huitre from "../../assets/img/huitre2.jpg";
import huitre2 from '../../assets/img/huitre2.jpg'
import huitre3 from '../../assets/img/huitrecreusebaie.jpg';
import huitrefine from '../../assets/img/huitrefine.jpg';
import bourriche from "../../assets/img/bourriche.jpg";
import huitreM from'../../assets/img/huitreM.jpeg';
import { UserContext } from '../../UserContext'


function Price() {
  const{price,setPrice}=useContext(UserContext)
  
  const increment=()=>{
   
setPrice(price+1)
  }
  const decrement=()=>{
    if(price>0){
      setPrice(price-1)
     
    }
    

  }
  return (
    <div className='Price'>
        <div class="container">
        <div className="background">
          <img src={huitrefine}></img>
          <div className="price">
          <p>huitre fine n°3</p>
          <i>42 €</i><button onClick={increment}>+</button ><button onClick={decrement}>-</button>
          </div>
        </div>
        <div className="background">
        
          <img src={huitre2}></img>
          <div className="price">
          <p>huitre fine n°2</p>
          <i>35 €</i><button onClick={increment}>+</button ><button onClick={decrement}>-</button>
          </div>
        </div>
        <div className="background">
          <img src={huitre3}></img>
          <div className="price">
          <p>Bourriche de 48 fines</p>
          <i>25€</i><button onClick={increment}>+</button ><button onClick={decrement}>-</button>
         </div> 
        </div>
        <div className="background">
          <img src={bourriche}></img>
          <div className="price">
          <p>Bourriche spéciale</p>
          <i>45€</i><button onClick={increment}>+</button ><button onClick={decrement}>-</button>
          </div>
        </div>
        <div className="background">
          <img src={huitreM}></img>
          <div className="price">
          <p>Huitre fine n°4</p>
          <i>25€</i><button onClick={increment}>+</button ><button onClick={decrement}>-</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Price