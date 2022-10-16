import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

function HeaderSocials() {
  return (
    <div className="header-socials">
      <a href="https://www.linkedin.com/in/petterbb/" target="_blank"><BsLinkedin /></a>
      <a href="https://github.com/PetterBakke" target="_blank"><FaGithub /></a>
    </div>
  )
}

export default HeaderSocials;