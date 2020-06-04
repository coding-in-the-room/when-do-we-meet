import MenuIcon from "@material-ui/icons/Menu";
import AppBar, { AppBarProps } from "@material-ui/core/AppBar";
import styled, { ThemedStyledProps } from "styled-components/macro";

import { BREAKPOINT } from "../../constant";

interface HeaderProps extends ThemedStyledProps<AppBarProps, any> {
  background?: string;
  children: React.ReactNode;
}

export const Header = styled(AppBar)<HeaderProps>`
  && {
    background-color: ${(props) => props.background};
    color: white;
    position: fixed;
    z-index: 2;
    box-shadow: none;
    display: block;
    flex-direction: unset;
    flex-shrink: unset;
  }
`;

export const HeaderContainer = styled.div`
  height: 6.4rem;

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

export const HamburgerIcon = styled(MenuIcon)``;
