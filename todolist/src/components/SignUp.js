import React, { useState } from "react";

function SignUp() {
  const [signUp, setsignUp] = useState({
    FName: "",
    LName: "",
    email: "",
    Ps1: "",
  });

  function handelChange(event) {
    const theNewVal = event.target.value;
    const theInputTriggered = event.target.name;
    setsignUp((prevValue) => {
      return {
        ...prevValue,
        [theInputTriggered]: theNewVal,
      };
    });
  }

  //   if (theInputTriggered === "FName") {
  //     return {
  //       FName: theNewVal,
  //       LName: pervValue.LName,
  //       email: pervValue.email,
  //       Ps1: pervValue.Ps1,
  //     };
  //   }

  //   if (theInputTriggered === "LName") {
  //     return {
  //       FName: pervValue.FName,
  //       LName: theNewVal,
  //       email: pervValue.email,
  //       Ps1: pervValue.Ps1,
  //     };
  //   }

  //   if (theInputTriggered === "email") {
  //     return {
  //       FName: pervValue.FName,
  //       LName: pervValue.LName,
  //       email: theNewVal,
  //       Ps1: pervValue.Ps1,
  //     };
  //   }

  //   if (theInputTriggered === "Ps1") {
  //     return {
  //       FName: pervValue.FName,
  //       LName: pervValue.LName,
  //       email: pervValue.email,
  //       Ps1: theNewVal,
  //     };
  //   }
  // });

  function handelClick() {}
  return (
    <div class="paperBG">
      <div class="insideDivSignup">
        <label>Sign Up Page</label>
        <form onclick={handelClick}>
          <input
            onChange={handelChange}
            class="signUpInput"
            placeholder="Your First Name "
            name="FName"
            value={signUp.FName}
          ></input>

          <input
            onChange={handelChange}
            class="signUpInput"
            placeholder="Your Last Name "
            name="LName"
            value={signUp.LName}
          ></input>

          <input
            onChange={handelChange}
            class="signUpInput"
            placeholder="Your  Email "
            name="email"
            value={signUp.email}
          ></input>

          <input
            onChange={handelChange}
            class="signUpInput"
            placeholder="Your Password  "
            name="Ps1"
            value={signUp.Ps1}
          ></input>

          <input
            class="signUpInput"
            placeholder="Confirm Your Password "
          ></input>
          <br />
          <br />
          <button type="onSubmit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
