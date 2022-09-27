import React from 'react'

function Navbar() {

    const images = require.context("./../assets", true);


  return (
    <div>
        <div className='container'>
            <div className='navsection'>
            <div className="sidelogo">
            <img src={images("./logo.png")} alt="banner"></img>
        </div>
        <div className='mobnum'>
            <img className='inline' src={images('./phone.png')} alt="banner"></img>
            <p className='inline'>(315) 492-2600, (855) 492-2600</p>
        </div>

            </div>
        </div>
    </div>
  )
}

export default Navbar