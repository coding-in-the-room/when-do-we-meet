import React, { useState } from "react";

import * as S from "./styles";
import Button from "../button";
import Modal from "../modal";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);

  const toggleModal = () => {
    setIsModalOpened(!isModalOpened);
  };

  return (
    <S.Header>
      <S.HeaderContainer>
        <S.MobileContainer>
          <S.Logo>로고</S.Logo>
          <Button onClick={toggleModal}>Sign up</Button>
        </S.MobileContainer>
        <S.DesktopContainer>
          <S.Logo>로고</S.Logo>
          <Button onClick={toggleModal}>Sign up</Button>
        </S.DesktopContainer>
      </S.HeaderContainer>
      <Modal open={isModalOpened} onClose={toggleModal}>
        <S.ModalContent>
          <S.ModalContentContainer>
            <S.SignInButtonContainer>
              <S.SignInButton>Sign in</S.SignInButton>
              <S.SignInWithGoogleButton
                href={process.env.REACT_APP_GOOGLE_OAUTH_PATH}
              >
                Sign in with google
              </S.SignInWithGoogleButton>
            </S.SignInButtonContainer>
          </S.ModalContentContainer>
        </S.ModalContent>
      </Modal>
    </S.Header>
  );
};

export default Header;
