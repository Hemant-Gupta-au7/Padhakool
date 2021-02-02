import React from "react";
import "./footercss.css";
function Foooter() {
  return (
    <div style={{ "background-color": "rgba(90, 24, 154, 1)" }}>
      {/* ------------------------------------LAPTOP VERSION--------------------------------------- */}
      <div className="display_data">
        <div class="text-center p-3 row">
          {/* col-1 */}
          <div className=" col-lg-3">
            <p style={{ color: "rgba(255, 255, 255, 1)" }}>Padhakool</p>
            <p style={{ color: "rgba(255, 255, 255, 1)" }}>
              About Us <br />
              <small style={{ color: "rgba(255, 255, 255, 1)" }}>
                Tag Line here describing what we do
              </small>
            </p>
            <div style={{ color: "rgba(255, 255, 255, 1)" }}>Contact Us</div>
          </div>
          {/* col-2 */}
          <div className=" col-lg-3">
            <p style={{ color: "rgba(255, 255, 255, 1)" }}>
              Information <br />
              <small style={{ color: "rgba(255, 255, 255, 1)" }}>
                About Us <br />
                <small style={{ color: "rgba(255, 255, 255, 1)" }}>
                  Search
                </small>
              </small>
            </p>
          </div>
          {/* col-3 */}
          <div
            className=" col-lg-3"
            style={{ color: "rgba(255, 255, 255, 1)" }}
          >
            <p>
              Helpful Links <br />
              <small>Service</small>
              <br />
              <small>Support</small>
              <br />
              <small>Terms and Conditions</small>
              <br />
              <small>Privacy Policy</small>
              <br />
            </p>
          </div>
          {/* col-4 */}
          <div className="col-lg-3" style={{ color: "rgba(255, 255, 255, 1)" }}>
            <form>
              <div class="form-group">
                <label for="exampleFormControlTextarea1">
                  Subscribe for more
                </label>
                <textarea
                  style={{
                    width: "65%",
                    height: "40%",
                    borderRadius: "5%",
                    marginLeft: "19%",
                  }}
                ></textarea>
                <br />
                <button
                  className="footer_Button"
                  style={{ marginTop: "3%", marginRight: "22%" }}
                >
                  <small style={{ color: "rgba(255, 255, 255, 1)" }}>
                    {" "}
                    Subscribe
                  </small>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* ----------------------------------------------MOBILE VERSION---------------------------------------------- */}
      {/* <div style={{ marginLeft: "2%" }} className="mobile_view">
        <table>
          <tr>
            <th style={{ color: "rgba(255, 255, 255, 1)" }}>Padhakool</th>
          </tr>
          <br />
          <tr>
            <th style={{ color: "rgba(255, 255, 255, 1)" }}> About Us</th>
          </tr>
          <tr>
            <td>
              <small style={{ color: "rgba(255, 255, 255, 1)" }}>
                Tag Line here describing what we do
              </small>
            </td>
          </tr>
          <br />
          <tr>
            <th style={{ color: "rgba(255, 255, 255, 1)" }}> Information </th>
          </tr>
          <tr>
            <td>
              <small style={{ color: "rgba(255, 255, 255, 1)" }}>
                {" "}
                About Us
              </small>
            </td>
          </tr>
          <tr>
            <td>
              <small style={{ color: "rgba(255, 255, 255, 1)" }}>Search</small>
            </td>
          </tr>
          <br />
          <tr>
            <th style={{ color: "rgba(255, 255, 255, 1)" }}> Helpful Links </th>
          </tr>
          <tr>
            <td>
              <small style={{ color: "rgba(255, 255, 255, 1)" }}>Service</small>
            </td>
          </tr>
          <tr>
            <td>
              {" "}
              <small style={{ color: "rgba(255, 255, 255, 1)" }}>Support</small>
            </td>
          </tr>
          <tr>
            <td>
              {" "}
              <small style={{ color: "rgba(255, 255, 255, 1)" }}>
                Terms and Conditions
              </small>
            </td>
          </tr>
          <tr>
            <td>
              {" "}
              <small style={{ color: "rgba(255, 255, 255, 1)" }}>
                Privacy Policy
              </small>
            </td>
          </tr>
          <br />
          <tr>
            <th style={{ color: "rgba(255, 255, 255, 1)" }}> Contact Us </th>
          </tr>
          <br />
          <tr>
            <th style={{ color: "rgba(255, 255, 255, 1)" }}>
              {" "}
              Subscribe for me{" "}
            </th>
          </tr>

          <tr>
            <td>
              <textarea
                style={{
                  width: "65%",
                  height: "40%",
                  borderRadius: "5%",
                  marginLeft: "1%",
                }}
              ></textarea>
            </td>
          </tr>
          <tr>
            <td>
              <button
                className="footer_Button"
                style={{ marginTop: "3%", marginRight: "22%" }}
              >
                <small style={{ color: "rgba(255, 255, 255, 1)" }}>
                  {" "}
                  Subscribe
                </small>
              </button>
            </td>
          </tr>
        </table>
      </div> */}
      {/* ---------------------------------------TAB VERSION------------------------------------------ */}
      <div className="tabversion" style={{ marginLeft: "25%" }}>
        <div className="row">
          <div
            className="col-xs-6 col-sm-6 col-md-6 col-lg-6"
            style={{ marginTop: "7%" }}
          >
            <table>
              <tr>
                <th style={{ color: "rgba(255, 255, 255, 1)" }}>Padhakool</th>
              </tr>
              <br />
              <tr>
                <th style={{ color: "rgba(255, 255, 255, 1)" }}> About Us</th>
              </tr>
              <tr>
                <td>
                  <small style={{ color: "rgba(255, 255, 255, 1)" }}>
                    Tag Line here describing what we do
                  </small>
                </td>
              </tr>
              <br />

              <tr>
                <th style={{ color: "rgba(255, 255, 255, 1)" }}>
                  {" "}
                  Information{" "}
                </th>
              </tr>
              <tr>
                <td>
                  <small style={{ color: "rgba(255, 255, 255, 1)" }}>
                    {" "}
                    About Us
                  </small>
                </td>
              </tr>
              <tr>
                <td>
                  <small style={{ color: "rgba(255, 255, 255, 1)" }}>
                    Search
                  </small>
                </td>
              </tr>
              <br />
              <tr>
                <th style={{ color: "rgba(255, 255, 255, 1)" }}>
                  {" "}
                  Contact Us{" "}
                </th>
              </tr>
            </table>
          </div>
          <div
            className="col-xs-6 col-sm-6 col-md-6 col-lg-6"
            style={{ marginTop: "7%" }}
          >
            <table>
              <tr>
                <th style={{ color: "rgba(255, 255, 255, 1)" }}>
                  {" "}
                  Helpful Links{" "}
                </th>
              </tr>
              <tr>
                <td>
                  <small style={{ color: "rgba(255, 255, 255, 1)" }}>
                    Service
                  </small>
                </td>
              </tr>
              <tr>
                <td>
                  {" "}
                  <small style={{ color: "rgba(255, 255, 255, 1)" }}>
                    Support
                  </small>
                </td>
              </tr>
              <tr>
                <td>
                  {" "}
                  <small style={{ color: "rgba(255, 255, 255, 1)" }}>
                    Terms and Conditions
                  </small>
                </td>
              </tr>
              <tr>
                <td>
                  {" "}
                  <small style={{ color: "rgba(255, 255, 255, 1)" }}>
                    Privacy Policy
                  </small>
                </td>
              </tr>
              <br />
              <tr>
                <th style={{ color: "rgba(255, 255, 255, 1)" }}>
                  {" "}
                  Subscribe for me{" "}
                </th>
              </tr>

              <tr>
                <td>
                  <textarea
                    style={{
                      width: "65%",
                      height: "40%",
                      borderRadius: "5%",
                      marginLeft: "1%",
                    }}
                  ></textarea>
                </td>
              </tr>
              <tr>
                <td>
                  <button
                    className="footer_Button"
                    style={{ marginTop: "3%", marginRight: "22%" }}
                  >
                    <small style={{ color: "rgba(255, 255, 255, 1)" }}>
                      {" "}
                      Subscribe
                    </small>
                  </button>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Foooter;
