import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>ⓒJonathan DiVito {year}</p>
    </footer>
  );
}

export default Footer;
