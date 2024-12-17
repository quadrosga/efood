import React from "react";
import headerImg from "../../assets/images/banner.png";
import { Image } from "./styles";

const Header = () => (
  <>
    <Image style={{ backgroundImage: `url(${headerImg})` }} />
    <div className="container">
      <img src="#" alt="logo" />
      <h1>
        Viva experiências gastronômicas
        <br /> no conforto da sua casa
      </h1>
    </div>
  </>
);

export default Header;
