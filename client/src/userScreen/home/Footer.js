import React from 'react'
import './css/footer.css'

const Footer = () => {
    return(
        <div>
            
            <div className='f-back1'>
            <div className='container'>
            <div className='row'>
                <div className='col'>
                    <div className='row'>
                    <div className='f-padhakool'>
                        Padhakool
                    </div>
                    </div>
                    <div className='row'>
                    <div className='f-padhakool'>
                       About Us 
                    </div>
                    <p className='f-p'>demo</p>
                    </div>
                    <div className='row'>
                    <div className='f-padhakool'>
                        Contact Us
                    </div>
                    </div>
                </div>
                <div className='col'>
                    <div className='row'>
                    <div className='f-padhakool'>
                        Information
                    </div>
                    </div>
                    <div className='row'>
                    <p className='f-p'>demo</p>
                    <p className='f-p'>demo</p>
                    </div>
                </div>
                <div className='col'>
                <div className='row'>
                    <div className='f-padhakool'>
                        Helfull Links
                    </div>
                    </div>
                    <div className='row'>
                    <p className='f-p'>demo</p>
                    <p className='f-p'>demo</p>
                    <p className='f-p'>demo</p>
                    <p className='f-p'>demo</p>
                    </div>
                </div>
                <div className='col'>
                    <center>
                    <div className='row'>
                    <div className='f-padhakool' style={{margin:'10% 0 10% -5%'}}>
                        Subscribe for more
                    </div>
                    </div>
                    <div className='row'>
                        <input className='input-box'></input>
                    </div>
                    <div className='row'>
                        
                    <button class="subscribe-button"><span className='subscribe-button-text'>Subscribe</span></button>
                    </div>
                    </center>
                </div>
            </div>
            </div>
            </div>

            <div className='f-back2'>
                
                <div className='container'>
                    <div>
                <div className='padhakoolM' style={{color:'#ffffff'}}>
                   <br></br> <h3>Padhakool</h3>
                </div><br></br>

                <div className='aboutusM' style={{color:'#ffffff'}}>
                    About US
                    <p style={{color:'#f2f2f2'}}>demo</p>

                </div>
                <div className='aboutusM' style={{color:'#ffffff'}}>
                    Helpful links
                    <p style={{color:'#f2f2f2'}}>demo</p>

                </div>
                <div className='aboutusM' style={{color:'#ffffff'}}>
                    Contact US
                    <p style={{color:'#f2f2f2'}}>demo</p>

                </div><br></br>
                <div className='aboutusM' style={{color:'#ffffff'}}>
                    Subscribe for more<br></br>
                    <input className='input-box' style={{margin:'5% 0 -15% 0%'}}></input><br></br><br></br>
                    <button class="subscribe-button" style={{margin:'0 0 10% 0'}}><span className='subscribe-button-text'>Subscribe</span></button>

                </div>
                </div>
                </div>
           
            </div>
        </div>
    )
}

export default Footer