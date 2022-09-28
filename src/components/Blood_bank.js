import React from 'react'
import bloodbank from './../bloodbank.json'
import {useParams} from 'react-router-dom'
import Navbar  from './Navbar';
import Footer from './Footer';


function Blood_bank() {

        const images = require.context("./../assets", true);

        let {id} = useParams();

        const data = bloodbank.find(item=> item.id===id)

  return (
    <div>
        <div className='blood-nav'>
            <Navbar/>
        </div>


        <div className='blood-page'>
        <div className='blood-img'>
            <img src={images(data.img)} alt="banner"></img>
        </div>
        <div className='blood-title'>
            <h3>{data.title}</h3>
        </div>
        <div className='blood-content'>
            <p>{data.content}</p>
        </div>

        </div>
        <div className='viewfooter'>
            <Footer/>
        </div>

    </div>
  )
}

export default Blood_bank