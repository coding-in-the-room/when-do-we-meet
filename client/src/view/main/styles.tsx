import styled from "styled-components/macro";
import { BREAKPOINT, THEME } from "../../constant";
import Button from "@material-ui/core/Button";

export const Catchphrase = styled.div`
  font-size: 6rem;
  font-weight: 800;
  height: 30rem;
  margin-top: 7rem;
`;

export const SubTitle = styled.div`
  font-size: 2rem;
  color: ${THEME.DARKGRAY};
`;

export const Main = styled.div`
  display: flex;
`;

export const MainContainer = styled.div`
  padding: 5rem;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

export const TryButton = styled(Button)`
  && {
    background: linear-gradient(45deg, ${THEME.PRIMARY} 00%, ${THEME.SECONDARY} 50%, ${THEME.TERTIARY} 100%);
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
