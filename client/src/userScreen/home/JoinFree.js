import React from 'react'
import './css/joinfree.css'

const JoinFree = () => {
    return (
        <div>
            <div className='container'>
                <div className='aabc'>
                    <div className='row'>
                        <div className='col joinfree-part1'>
                            <div className='row'>
                            <p className='joinfree-text'>Learn the <span className='joinfree-best'> best </span>courses with Padhakool</p>
 
                            </div>
                            <div className='row'>
                            <button class="joinfree-button"><span className='joinfree-text2'>Join Free</span></button>
                            </div>
                                                       
                        </div>
                        <div className='col'>
                            
                            <img className='joinfree-img' src='https://res.cloudinary.com/dglwgfgfi/image/upload/v1611918488/padhakool/static%20img/1_geytsl.png'></img>
                        </div>
                    </div>

                </div>



                {/* mobile */}

                <div className='aabc2'>
                   
                   <div className='container'>

                        <div className='col'>
                            <div className='row'>
                            <p className='joinfree-text11' style={{margin:'10%'}}>Learn the <span  className='joinfree-best11'> best </span>courses with Padhakool</p><br></br>
                            <button class="joinfree-button" style={{margin:'0% 0 10% 13%'}}><span className='joinfree-text212'>Join Free</span></button>
                            </div>
                            <div className='row'>
                            <img className='joinfree-img' src='https://res.cloudinary.com/dglwgfgfi/image/upload/v1611918488/padhakool/static%20img/1_geytsl.png'></img>
                            </div>
                        </div>
                     
                   </div>

                </div>


            </div>

        </div>

    )
}

export default JoinFree