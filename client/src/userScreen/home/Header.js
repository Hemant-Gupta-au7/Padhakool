import React from 'react'
import './css/header.css'
import { Button, Dropdown } from 'react-bootstrap';
import './css/header.css'

const Header = () => {
    return (
        <div>

            {/* mobile version */}
            <div className='abc2' style={{ margin: '-12% 0 0 0' }}>
                <div className='container'>
                    <div className='row'>
                        <div className='col'>
                            <div>
                                <img className='header-img' src='https://res.cloudinary.com/dglwgfgfi/image/upload/v1612246784/padhakool/static%20img/home/Padhakool_final_logo-04_ve0clu.png' />

                            </div>
                        </div>
                        <div className='col'>
                            <div className='row' style={{ margin: '0 0 0 0' }}>
                                <div className='col'>
                                    <center>
                                        <Dropdown>
                                            <Dropdown.Toggle variant="" className='header-dropdown' id="dropdown-basic" style={{ color: ' #FFFFFF' }}>
                                                <span className='dropdown-header-text' >Courses &nbsp;
                                </span>
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>

                                    </center>
                                </div>
                                {/* <div className='col-2'>
                                <div className='toggalButton1 xyz1' style={{margin:'100% 0 0 0'}}>
                                    icon
                                </div>
                               
                                <div className='toggalButton1 xyz2'>
                                    icon
                                </div>
                                
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* laptop version final */}
            <div className='container abc'>
                <div className='row' style={{ margin: '-5% 0 0 0' }}>
                    <div className='col'>
                        <div className='row'>
                            <div className='col'>
                                <Dropdown>
                                    <Dropdown.Toggle variant="" className='header-dropdown' id="dropdown-basic" style={{ color: ' #FFFFFF' }}>
                                        <span className='dropdown-header-text' >Courses &nbsp;
                                </span>
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <div className='col'>
                                <div className='search'>
                                    <input className='inputTag' placeholder='Search' type='text' />

                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='col'>
                        <div><center>
                            <img className='header-img' src='https://res.cloudinary.com/dglwgfgfi/image/upload/v1612246784/padhakool/static%20img/home/Padhakool_final_logo-04_ve0clu.png' />
                        </center></div>
                    </div>
                    <div className='col'>
                        <div className='row' style={{ margin: '5% 0 0 0' }}>
                            <div className='col-4'>
                                <center>
                                    <button class="header-button"><span className='header-text2'>Login</span></button>
                                </center>
                            </div>&nbsp;&nbsp;
                            <div className='col-4'>
                                <center>
                                    <button class="header-button1">&nbsp;<span className='header-text21'>Signup</span></button>
                                </center>
                            </div>
                            <div className='col-4'>
                                {/* <center>
                            <div className='toggalButton'>
                                    icon
                                </div>
                                </center> */}
                            </div>
                        </div>
                    </div>
                </div>

            </div>





            {/* mobile */}


        </div>
    )
}

export default Header