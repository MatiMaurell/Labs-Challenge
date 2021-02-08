import React from 'react';
import './Contact.css';


const contact = () => {

return (
    <div>
      <div className= "backgroundContact" >
          <div id="textBoxContact">      
              <div id="titleContact"><h3>Contactanos</h3></div> <br/>
            <br/>
              <form className='formsContact'>
                <div className="form-group" className="fullInput">
                    <label for="exampleInputEmail1">Nombre completo</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div class="form-group" className="emailInput">
                    <label for="exampleInputPassword1">Email</label>
                    <input type="email" class="form-control" id="exampleInputPassword1"/>
                </div>
                <div class="form-group" className="messageInput">
                    <label for="exampleFormControlTextarea1">Mensaje</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button type="submit" class="btn btn-primary" id="submitButtonContact">Enviar</button>
                </form>
           </div>
      </div>    
    </div>
    )

}

export default contact; 