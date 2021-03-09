import React from "react";

function Nav() {
  return (
    <nav>
      <ul class="nav-links">
        <li>
          <a href="/login">LogIn</a>
        </li>
        <li>
          <a href="/signup">Sign Up</a>
        </li>
        <li>
          <a href="/">My To Dos'</a>
        </li>
        <li>
          <a href="/about">About Us</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
