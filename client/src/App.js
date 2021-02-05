import logo from './logo.svg';
import './App.css';
import React, { useEffect, createContext,useReducer,useContext } from "react";
import { BrowserRouter, Switch, Route, Link,useHistory } from "react-router-dom";
import Home from './userScreen/home/Home'
import AdminLogin from './adminScreen/auth/AdminLogin'
import AdminRegistration from './adminScreen/auth/AdminRegistration'
import AdminHome from './adminScreen/home/AdminHome'
import { reducer, initialState } from './reducers/userReducer'

//Creating context
export var UserContext = createContext();

const Routing = () => {

  var history=useHistory()
  var {state,dispatch}=useContext(UserContext)
  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("user"))
    if(user){
      dispatch({type:"USER",payload:user})
    }else{
      if(!history.location.pathname.startsWith('/admin'))
           history.push('/')
    }
  },[])

 

  return (
    <Switch>
      <Route exact path="/">
        <Home></Home>
      </Route>
      <Route exact path='/admin-login'>
        <AdminLogin></AdminLogin>
      </Route>
      <Route exact path='/admin-registration'>
        <AdminRegistration></AdminRegistration>
      </Route>
      <Route exact path='/admin-home'>
        <AdminHome></AdminHome>
      </Route>

    </Switch>
  )





}





function App() {
  var [state,dispatch]=useReducer(reducer,initialState)
  return (
    
    <UserContext.Provider value={{state,dispatch}}>
    <BrowserRouter>
      <Routing/>
    </BrowserRouter>
    </UserContext.Provider>
    
  );
}

export default App;
