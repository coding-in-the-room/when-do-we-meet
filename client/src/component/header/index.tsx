import React from "react";

import * as S from "./styles";
import Button from "../Button";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <S.Header>
      <S.HeaderContainer>
        <S.MobileContainer>
          <Button>Sign up</Button>
        </S.MobileContainer>
        <S.DesktopContainer></S.DesktopContainer>
      </S.HeaderContainer>
    </S.Header>
  );
};

export default Header;
