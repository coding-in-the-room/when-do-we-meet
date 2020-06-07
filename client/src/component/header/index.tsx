import React from "react";

import * as S from "./styles";
import Button from "../button";
interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <S.Header>
      <S.HeaderContainer>
        <S.MobileContainer>
          <S.Logo>로고</S.Logo>
          <Button>Sign up</Button>
        </S.MobileContainer>
        <S.DesktopContainer>
          <S.Logo>로고</S.Logo>
          <Button>Sign up</Button>
        </S.DesktopContainer>
      </S.HeaderContainer>
    </S.Header>
  );
};

export default Header;
