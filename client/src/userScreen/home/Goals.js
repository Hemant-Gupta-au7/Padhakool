import React from 'react'
import './css/goals.css'

const Goals = () => {
    return (
        <div>
            <div className='goals-background'>
                <center>
                <div className='goals-header'>
                    <span className="goals-header2"> Padhakool will help you <br></br> achive your goals</span>
                </div>
          
            <div>
                <div className='row goals-container'>
                    <div className='col-md-4'>
                        <div className='row3'>
                            <img className='goals-img' src='https://res.cloudinary.com/dglwgfgfi/image/upload/v1611921112/padhakool/static%20img/home/2_upzgh6.svg'></img>
                        </div>
                        <div className='row3'>
                            <p className='heading2'><b>Earn a credible certificate</b></p>
                            <p className='text2'>rek</p>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div>
                        <div className='r3ow'>
                        <img className='goals-img1' src='https://res.cloudinary.com/dglwgfgfi/image/upload/v1611921780/padhakool/static%20img/home/3_yrjplm.svg'></img>

                        </div>
                        <div className='ro3w'>
                        <p className='heading2 text2-margin'><b>Personalized learning</b></p>
                        <p className='text2 '>rek</p>
                        </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className=''>
                        <img className='goals-img' src='https://res.cloudinary.com/dglwgfgfi/image/upload/v1611921788/padhakool/static%20img/home/4_snsxca.svg'></img>
                        
                        </div>
                        <div className=''>
                        <p className='heading2'><b>Get world class experts</b></p>
                        <p className='text2'>rek</p>

                        </div>
                    </div>
                </div>
            </div>
            </center>
            </div>
        </div>
    )
}

export default Goals;