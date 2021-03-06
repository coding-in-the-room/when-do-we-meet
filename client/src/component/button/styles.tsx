import MaterialButton from "@material-ui/core/Button";
import styled from "styled-components/macro";

interface ButtonContainerProps {
  backgroundcolor?: string;
}

export const Button = styled(MaterialButton)<ButtonContainerProps>`
  && {
    text-transform: none;
    background-color: ${(props) => props.backgroundcolor};
  }
`;

export const ButtonContainer = styled.div<ButtonContainerProps>`
  font-size: 1.4rem;
`;
