import React from "react";
import loginImg from "../login.png";

function LogIn() {
  return (
    <div class="paperBG">
      <div class="insideDiv">
        <img class="loginImg1" src={loginImg} alt=""></img>
        <from>
          <label>User Name:</label>
          <input class="loginInput" placeholder="Name"></input>
          <label>Password:</label>
          <input class="loginInput" placeholder="Pass"></input>
          <br />
          <br />
          <button>Submit</button>
        </from>
      </div>
    </div>
  );
}

export default LogIn;
