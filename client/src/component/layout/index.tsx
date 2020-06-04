import React from "react";

import * as S from "./styles";
import Header from "../header";

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <S.Layout>
      <Header />
      <S.ContentContainer>
        <S.Content>{children}</S.Content>
      </S.ContentContainer>
    </S.Layout>
  );
};

export default Layout;
