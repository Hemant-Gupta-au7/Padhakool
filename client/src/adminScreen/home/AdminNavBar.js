import React, { Component, useContext, useRef, useEffect, useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import M from 'materialize-css'
import { UserContext } from '../../App';

const AdminNavBar = () => {

    const  searchModal = useRef(null)
    const [search,setSearch] = useState('')
    const [userDetails,setUserDetails] = useState([])
     const {state,dispatch} = useContext(UserContext)
     const history = useHistory()
     useEffect(()=>{
         M.Modal.init(searchModal.current)
     },[])

    return (
        <div>
            <nav>
                <div className="nav-wrapper" >
                    <Link className="brand-logo left ml-5"  >Padhakool</Link>
                    <ul id="nav-mobile" className="right">
                        {/* <div className="container" style={{ fontSize: 35 }}> */}

                            <li><Link to="/admin-home">Home</Link></li>
                          




                                <li><button
                                className="btn btn-warning"
                                onClick={() => {
                                    localStorage.clear()
                                    dispatch({ type: "CLEAR" })
                                    history.push('/admin-login')
                                }}
                            >
                                LogOut
                            </button></li>
{/* </div> */}
                    </ul>
                </div>
                <div id="modal1" class="modal" ref={searchModal} style={{ color: "black" }}>
                    <div className="modal-content">
                        
                        
                    </div>
                   
                </div>
            </nav> 
        </div>
    )
}

export default AdminNavBar