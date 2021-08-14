import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavBar} from "./components/NavBar/NavBar";
import {ItemListContainer} from "./components/itemListContainer/itemListContainer";



function App() {
  return (
    <div>
        <NavBar/>
        <ItemListContainer greeting="Estas son nuestras últimas novedades:"/>
    </div>
  );
}

export default App;
