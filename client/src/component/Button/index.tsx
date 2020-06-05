import React from "react";

import * as S from "./styles";

interface ButtonProps {
  children?: React.ReactNode;
  border?: boolean;
  backgroundColor?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  border = true,
  backgroundColor = "white",
}) => {
  return (
    <S.Button disableRipple={true}>
      <S.ButtonContainer>{children}</S.ButtonContainer>
    </S.Button>
  );
};

export default Button;
