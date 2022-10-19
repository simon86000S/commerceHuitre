import React,{useState} from 'react'
import Nav from '../Nav/Nav'
import Landing from './Landing/Landing'
import Article from '../Article/Article'
import Aside from './Aside/Aside';
import Desc from './Desc/Desc';
import Price from './Price/Price';

import Footer from '../Footer/Footer';
import '../Home/Home.scss'
import huitre from '../assets/img/huitresvg.jpg'
function Home() {
  const [price, setPrice] = useState(0);

  return (
    <div className='Home'>
      <h1 className='title-Home'>Huitre en Ligne</h1>
        <Nav price={price} />
<Landing/>
<Article/>
<Aside/>
<Desc/>
<Price price={price} setPrice={setPrice}/>
<Footer></Footer>

    </div>
  )
}

export default Home