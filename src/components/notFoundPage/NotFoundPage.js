/*Falta implementar e integrar al sitio*/

import React from 'react';
import { Link } from 'react-router-dom';

class NotFoundPage extends React.Component{
    render(){
        return <div>
            <img src={'https://pbs.twimg.com/media/ExcsuIBXMAYHOen?format=jpg&name=900x900'} 
                     alt="La reacción de CJ al enterarse que no encuentra la página."  / >
            <p style={{textAlign:"center"}}
                Error                
                >
              <Link to="/">Volver al inicio </Link>
            </p>
          </div>;
    }
}

export default NotFoundPage;