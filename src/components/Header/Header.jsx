import React from "react";
import Toggle from "../Toggle/Toggle";
import Translate from "./../../images/Translate.svg";
import { HeaderNav, Nav, LogoBox, LogoTitle, LogoImage } from "./Header-css";

function Header() {
  return (
    <HeaderNav>
      <Nav>
        <LogoBox>
          <LogoImage src={Translate} />
          <LogoTitle>ترجمه</LogoTitle>
        </LogoBox>
        <div>
          <Toggle />
        </div>
      </Nav>
    </HeaderNav>
  );
}

export default Header;
