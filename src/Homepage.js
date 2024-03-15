import React from 'react';
// import Registration from './Registration';
// import Login from './Login';
import {useNavigate} from 'react-router-dom';

import CRUD from './CRUD';

function Homepage() {

  const Navi = useNavigate()
 
function handleReg(){
  Navi('/Registration')
}
function handleLog(){
  Navi('/Login')
}
  
  return (
   
    <div>
 
      <h1>Cargo Manager System</h1>
      <br></br>
      
{/*       
      <Registration/><br>
      </br>
      <br></br>
      <Login/> */}

      {/* <br></br>
        <br></br> */}
         <button  onClick={(e)=>handleReg()}>Registration  </button>    

            <button  onClick={(e)=>handleLog()}>Login</button>
        
        
   

</div>
  )
    
  
  }

export default Homepage;
