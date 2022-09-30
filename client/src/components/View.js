import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import {useLocation} from 'react-router-dom'

function View() {

    const locate = useLocation();
  return (
    <div className='viewpage'>
        <div className='viewNav'>
            <Navbar/>
        </div>
        <div className='viewbody'>
            <div className='viewhead'>
                <h3>Welcome to UPSTATE</h3>
            </div>
            <div className='viewdetail'>
                <div className='disInLine'>
                    <div>
                        <h4>Name :</h4>
                    </div>
                    <div>
                        <h4 className='inputvalue'>{locate.state.Name}</h4>
                    </div>
                </div>
                <div className='disInLine'>
                    <h4>Email :</h4>
                    <h4 className='inputvalue'>{locate.state.Email}</h4>
                </div>
                <div className='disInLine'>
                    <h4>Number :</h4>
                    <h4 className='inputvalue'>{locate.state.Number}</h4>
                </div>
                <div className='disInLine'>
                    <h4>Message :</h4>
                    <h4 className='inputvalue'>{locate.state.Message}</h4>
                </div>
            </div>
        </div>
        <div className='viewfooter'>
            <Footer/>
        </div>
    </div>
  )
}

export default View