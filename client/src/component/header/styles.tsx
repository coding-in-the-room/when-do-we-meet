import AppBar, { AppBarProps } from "@material-ui/core/AppBar";
import styled, { ThemedStyledProps } from "styled-components/macro";

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
  }
`;
