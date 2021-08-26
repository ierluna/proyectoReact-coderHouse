import 'bootstrap/dist/css/bootstrap.min.css';
import {NavBar} from "./components/NavBar/NavBar";
import {ItemListContainer} from "./components/itemListContainer/itemListContainer";
import { useState } from 'react/cjs/react.production.min';




function App() {
  
  
  return (
    <div>
        <NavBar/>
        <ItemListContainer/>
    </div>
  );
}

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
