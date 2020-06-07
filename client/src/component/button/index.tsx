import React from "react";

import * as S from "./styles";

interface ButtonProps {
  children?: React.ReactNode;
  border?: boolean;
  backgroundColor?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  border = true,
  backgroundColor = "white",
  onClick,
}) => {
  return (
    <S.Button
      onClick={onClick}
      backgroundcolor={backgroundColor}
      disableRipple={true}
    >
      <S.ButtonContainer>{children}</S.ButtonContainer>
    </S.Button>
  );
};

export default Button;
