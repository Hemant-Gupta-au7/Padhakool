
import React from "react";
import { BrowserRouter, Switch, Route, Link,useHistory } from "react-router-dom";
import Foooter from './component/userScreen/footer';
import Header from './component/userScreen/header';
import FreeCourses from './component/userScreen/home/freeCourses';
function App() {
  return (
    
    <Switch>
      <Route exact path="/footer">
      <Foooter/>
      </Route>
      <Route exact path="/header">
      <Header/>
      </Route>
      <Route exact path="/freeCourses">
      <FreeCourses/>
      </Route>
    </Switch>
      
   
  );
}

export default App;
