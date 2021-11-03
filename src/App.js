import "./App.css";
import Navegacion from "./componentes/Navegacion";
import "bootstrap/dist/css/bootstrap.min.css";
import Presentacion from "./componentes/Presentacion";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
function App() {
  return (
    <Router>
      <Navegacion></Navegacion>
      <Switch>
        <Route exact path='/'>
          <Presentacion></Presentacion>
        </Route>
        <Route exact path='/quienes-somos'></Route>
        <Route exact path='/productos'></Route>
        <Route exact path='/contacto'></Route>
        <Route exact path='/suscribite'></Route>
        <Route exact path='/login'></Route>
        <Route exact path='/Admin'></Route>
      </Switch>
    </Router>
  );
}

export default App;
