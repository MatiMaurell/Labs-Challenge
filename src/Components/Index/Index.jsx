import React from 'react';
import Button from '@material-ui/core/Button';
import './Index.css';
import {Link} from 'react-router-dom';

const index = () => {

return (
    <div className="fullindex"> 
      <div className="background-index">
          <div id="textBox">      
              <div id="titleIndex"><h1>Bienvenido</h1></div> <br/>
              <div id="introIndex">Encuentra el producto que estás buscando</div><br/>
              
              
              <Link to='/searchIndex' >
                <Button id="buttonIndex" variant="contained" color="grey" Link to="/searchindex">
                    Clickea para buscar 
                </Button>
              </Link>  
           </div>
      </div>    
    </div>
    )

}

export default index; 