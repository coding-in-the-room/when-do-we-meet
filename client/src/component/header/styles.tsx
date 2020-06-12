import AppBar, { AppBarProps } from "@material-ui/core/AppBar";
import styled, { ThemedStyledProps } from "styled-components/macro";
import Button from "@material-ui/core/Button";

import { BREAKPOINT, THEME } from "../../constant";

interface HeaderProps extends ThemedStyledProps<AppBarProps, any> {
  background?: string;
  children: React.ReactNode;
}

export const Header = styled(AppBar)`
  && {
    background-color: white;
    color: white;
    position: fixed;
    z-index: 2;
    box-shadow: none;
    display: block;
    flex-direction: unset;
    flex-shrink: unset;
    border-bottom: 1px solid ${THEME.GRAY};
  }
`;

export const HeaderContainer = styled.div`
  height: 5.6rem;

  position: relative;
  padding: 0 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @media only screen and (min-width: ${BREAKPOINT}px) {
    padding: 0 3rem 0 2rem;
  }
`;

export const MobileContainer = styled.div`
  display: flex;
  width: 100%;

  align-items: center;
  justify-content: space-between;

  @media only screen and (min-width: ${BREAKPOINT}px) {
    display: none;
  }
`;

export const DesktopContainer = styled.div`
  display: none;
  width: 100%;

  @media only screen and (min-width: ${BREAKPOINT}px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoImage = styled.img`
  width: 25%;
`;

export const HeaderButton = styled(Button)`
  && {
    /* background: linear-gradient(45deg, #ba78f3 00%, #f36d72 50%, #e9b677 100%); */
    border: 1px solid ${THEME.PRIMARY};
    color: ${THEME.PRIMARY};
  }
`;

export const DesktopButtonsContainer = styled.div`
  display: flex;
`;

export const ModalContent = styled.div`
  display: flex;
  @media only screen and (min-width: ${BREAKPOINT}px) {
    width: 47rem;
    height: 43rem;
  }
`;

export const ModalContentContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: white;
  border-radius: 1.4rem;
  padding: 2.4rem;
`;

export const SignInButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 12rem;
  justify-content: space-between;
`;

export const SignInButton = styled(Button)`
  && {
    background: linear-gradient(45deg, ${THEME.PRIMARY} 00%, ${THEME.SECONDARY} 50%, ${THEME.TERTIARY} 100%);
    color: white;

    width: 42rem;
    height: 4.6rem;
    border-radius: 1rem;
    font-size: 1.5rem;
    font-weight: bold;

    border: none;
    outline: none;

    box-shadow: ${THEME.GRAY} 1px 1px 3px;
  }
`;

export const SignInWithGoogleButton = styled(Button)`
  && {
    background: white;

    width: 42rem;
    height: 4.6rem;
    border-radius: 1rem;
    font-size: 1.5rem;
    font-weight: bold;

    border: none;
    outline: none;

    border: 1px solid ${THEME.PRIMARY};
    box-shadow: ${THEME.GRAY} 1px 1px 3px;
  }
`;

export const MiniLogoContainer = styled.span`
  position: absolute;
  left: 2rem;
  /* border-radius: 50%; */
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MiniLogo = styled.img`
  width: 80%;
`;
