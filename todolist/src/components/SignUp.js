import React from "react";

function SignUp() {
  return (
    <div class="paperBG">
      <div class="insideDivSignup">
        <from>
          <label>First Name:</label>
          <input class="signUpInput" placeholder="FName"></input>
          <label>Last Name:</label>
          <input class="signUpInput" placeholder="LName"></input>
          <label>Email</label>
          <input class="signUpInput" placeholder="email"></input>
          <label>Password</label>
          <input class="signUpInput" placeholder="Ps1"></input>
          <label>Confirm Password</label>
          <input class="signUpInput" placeholder="Ps2"></input>
          <br />
          <br />
          <button>Submit</button>
        </from>
      </div>
    </div>
  );
}

export default SignUp;
