import Typist from "react-typist";
import styled from "styled-components/macro";
import Button from "@material-ui/core/Button";

import { BREAKPOINT, THEME } from "../../constant";

export const Main = styled.div`
  display: flex;
  justify-content: center;
`;

export const MainContainer = styled.div`
  padding: 5rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Catchphrase = styled.div`
  display: flex;
  justify-content: space-between;

  font-size: 6rem;
  font-weight: 800;
  height: 40rem;

  @media only screen and (min-width: ${BREAKPOINT}px) {
    margin-top: 7rem;
  }
`;

export const CustomTypist = styled(Typist)`
  & {
    height: 50rem !important;
  }
`;

export const SubTitle = styled.div`
  font-size: 2rem;
  color: ${THEME.DARKGRAY};
`;

export const TryButton = styled(Button)`
  && {
    background: linear-gradient(
      45deg,
      ${THEME.PRIMARY} 00%,
      ${THEME.SECONDARY} 50%,
      ${THEME.TERTIARY} 100%
    );
    color: white;

    width: 35rem;
    height: 5rem;
    margin-top: 7rem;
    border-radius: 1rem;
    font-size: 2rem;
    font-weight: bold;

    border: none;
    outline: none;

    box-shadow: ${THEME.GRAY} 1px 1px 3px;
  }
`;
