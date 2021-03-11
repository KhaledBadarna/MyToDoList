import React from "react";
import loginImg from "../login.png";

function LogIn() {
  return (
    <div class="paperBG">
      <div class="insideDiv">
        <label>Log In Page</label>
        <img class="loginImg1" src={loginImg} alt=""></img>
        <form>
          <input class="loginInput" placeholder="Your Name "></input>

          <input class="loginInput" placeholder="Your Password"></input>
          <br />
          <br />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default LogIn;
