import React from "react";
import './css/freeCourse.css'



function FreeCourses() {

   


  return (
    <div>
        <div className='container'>
            {/* <div className='freeCourses'><br></br><br></br><br></br>
                Free Courses
            </div><br></br> */}
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <center>
                <h2>Free Courses</h2>
            </center>
            <br></br>
            <br></br>
            
            <center>
            <div className='body-freecourse1'>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='container'>
                            <p className='digital'>Digital Marketing</p>
                            <p className='digital1'>demo</p>
                            <button className='freeCourse-button'><span className='knowmore'>Know More</span></button>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div>
                            <img className='img-freecourse' src='https://res.cloudinary.com/dglwgfgfi/image/upload/v1612168318/padhakool/static%20img/home/urn_aaid_sc_US_8aec101f-33b6-4d76-a500-e31069c40d06_dtzlpl.png'></img>
                        </div>
                    </div>
                </div>
            </div>


            {/* mobile */}
            <div className='body-freecourse2'>
                <div className='row'>
                    <div className='col-md-6'>
                        
                          <div>
                            <img className='img-freecourse' src='https://res.cloudinary.com/dglwgfgfi/image/upload/v1612168318/padhakool/static%20img/home/urn_aaid_sc_US_8aec101f-33b6-4d76-a500-e31069c40d06_dtzlpl.png'></img>
                        </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='container'>
                            <p><b>Digital Marketing</b></p>
                            <p className=''>demo</p>
                            <button className='freeCourse-button'><span className='knowmore'>Know More</span></button>
                            
                        </div>
                    </div>
                </div>
            </div>
            </center>
        </div>
     
    </div>
  );
}

export default FreeCourses;