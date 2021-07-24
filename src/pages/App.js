import '../styles/App.scss'
import React from "react";
import { Route, Switch } from "react-router-dom"
import {Header} from "../common/Header";
import ItemsPage from "./ItemsPage/ItemsPage";
import OrderPage from "./OrderPage/OrderPage";

function App() {
  return (
    <div className="wrapper">
        <Header/>
      <Switch>
        <Route exact path='/' component={ItemsPage}/>
        <Route path='/order' component={OrderPage}/>
      </Switch>
    </div>
  );
}

export default App;
