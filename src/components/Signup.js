import React from "react";


function Signup(){
    return (
      <form>
        <div>
          <h1>Signup</h1>
          <div>
            <input type="text" name="sign_username" placeholder="Username"/>
          </div>
          <div>
            <input type="password" name="sign_password" placeholder="Password"/>
          </div>
            <input type="submit" value="Submit"/>
        </div>
      </form>
    );
  }


  export default Signup;