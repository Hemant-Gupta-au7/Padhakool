import React from 'react'
import './css/flegship.css'



const Flegship = () => {
    return (
        <div >
            <div className='container '>
                <container>
                    <br></br><br></br>
                    <p className='flegship-h1'>Flegship&nbsp;<span className='flegship-h2'>Courses</span></p>
                    <br></br>
                </container>

                <center>
                    <div className='flegship' >
                        <div className='row'>
                            <div className='col-md-6'>
                                <div className='container' style={{ margin: '10% 0 0 0' }}>
                                    <center>
                                        <p style={{ color: '#FFFFFF' }}><b>Digital Marketing</b></p>
                                        <p style={{ color: '#FFFFFF' }}>Dummy</p>
                                        <button className='flegship-button'><span className='knowmore' style={{ color: 'white' }}>Know More</span></button>
                                    </center>
                                </div>

                            </div>
                            <div className='col-md-6'>
                                <div className='flegship-part2'>
                                    <center>
                                        <div className='box1'>
                                            <p><b>Digital Marketing</b></p>
                                            <p className='flegship-module2' className='hr1'>dummy</p>
                                            <p className='flegship-module2' className='hr1'>dummy</p>
                                            <p className='flegship-module2' className='hr1'>dummy</p>
                                            <p className='flegship-module2' className='hr1'>dummy</p>
                                        </div>
                                    </center>
                                </div>
                            </div>
                        </div>
                    </div>
                </center>

            </div>
            <div >
                <img className="flegship_position" src="https://res.cloudinary.com/dglwgfgfi/image/upload/v1612503713/padhakool/static%20img/home/urn_aaid_sc_US_8aec101f-33b6-4d76-a500-e31069c40d06_2_e7ps0k.png" />

            </div>

        </div>
    )
}

export default Flegship;