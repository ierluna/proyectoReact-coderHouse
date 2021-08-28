import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavBar} from "./components/NavBar/NavBar";
import {ItemListContainer} from "./components/ItemListContainer/ItemListContainer";
import { useState } from 'react/cjs/react.production.min';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";

      function App() {
        return (
      <BrowserRouter>

      <NavBar/>

      <Switch>
          <Route exact path="/">
              <ItemListContainer/>
          </Route>
          <Route exact path="/category/:catId">
              <ItemListContainer/>
          </Route>

          <Route exact path="/detail/:itemId">
              <ItemDetailContainer/>
          </Route>

          <Route exact path="/nosotros">
              <h1>Nosotros</h1>
          </Route>

          <Route exact path="/cart">
              <h1>Carrito - En construcción<nav></nav></h1>
              <p>Disculpe las molestias</p>
          </Route>

          <Route path="*">
              <Redirect to="/"/>
          </Route>
        </Switch>

      </BrowserRouter>

  )}
export default App;


/* Código que quedó de la práctica del after class. Lo comento ya que no lo voy a usar en este commit.

function useStateTrucho(initialState) {
  let state;
  if (typeof initialState === 'function') {
    state = initialState();
  } else {
    let state = initialState;
    let setState = newValue => state = newValue;
    return [state,setState];
  }
}
*/
