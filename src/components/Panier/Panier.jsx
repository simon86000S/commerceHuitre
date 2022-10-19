import React,{useContext} from 'react'
import { UserContext } from '../UserContext'
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import "../Panier/Panier.scss"

const Panier = () => {
   const{price,setPrice}=useContext(UserContext)
  return (
    <div className='Bag'>
      <Nav/>
        <div className='banner'>
          <div className='first'>
           
          <table>
  <thead>
    <tr>
      <th>Produit</th>
      <th>Prix</th>
      <th>Quantité</th>
      <th>Total</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Body content 1</td>
      <td>Body content 2</td>
      <td>{price}</td>
      <td>Body content 2</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Footer content 1</td>
      <td>Footer content 2</td>
    </tr>
  </tfoot>
</table>

          </div>
         
          </div>
          <Footer/>
    </div>
  )
}

export default Panier