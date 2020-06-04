import React from "react";

import * as S from "./styles";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <S.Header>
      <S.HeaderContainer>
        <S.HamburgerIcon />
      </S.HeaderContainer>
    </S.Header>
  );
};

export default Header;
