import React from "react";
import "./freecourse.css";

function FreeCourses() {
  return (
    <div>
      {/* ---------------------------------------Laptop version----------------------------------------------------- */}
      <div className="fccard display_data">
        <div className="row">
          {/* --------------------------------------1st col------------------------------------------------- */}

          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <img
              className="fcimg"
              src="https://res.cloudinary.com/dglwgfgfi/image/upload/v1612168318/padhakool/static%20img/home/urn_aaid_sc_US_8aec101f-33b6-4d76-a500-e31069c40d06_dtzlpl.png"
            />
          </div>

          {/* --------------------------------------2nd col------------------------------------------------- */}
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div className="fcheader">Digital Marketing</div>
            <div className="fcbody text-justify">
              <small>
                t is a long established fact that a reader will be distracted by
                the readable content of a page when looking at its layout. The
                point of using or-less normal distribution
              </small>
            </div>
            <div className="fcbutton">
              <span className="fcbuttonInn">Know More</span>
            </div>
          </div>
        </div>
      </div>
      {/* ----------------------------------MOBILE_VERSION---------------------------------------------- */}
      <div className="fccard1 mobile_view" style={{ marginLeft: "40%" }}>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div className="fcheader1">Digital Marketing</div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <img
              className="fcimg1"
              src="https://res.cloudinary.com/dglwgfgfi/image/upload/v1612168318/padhakool/static%20img/home/urn_aaid_sc_US_8aec101f-33b6-4d76-a500-e31069c40d06_dtzlpl.png"
            />
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div className="fcbody1 text-justify">
              <small>
                The is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using or-less normal distribution
              </small>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div className="fcbutton1">
              <span className="fcbuttonInn1">Know More</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FreeCourses;
