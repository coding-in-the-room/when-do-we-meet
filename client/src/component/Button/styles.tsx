import MaterialButton from "@material-ui/core/Button";
import styled from "styled-components/macro";

interface ButtonContainerProps {}

export const Button = styled(MaterialButton)`
  && {
    text-transform: none;
  }
`;

export const ButtonContainer = styled.div<ButtonContainerProps>`
  font-size: 1.4rem;
`;
