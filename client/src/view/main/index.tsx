import React from "react";

import * as S from "./styles";

interface ComponentStarterProps {}

const ComponentStarter: React.FC<ComponentStarterProps> = () => {
  return (
    <S.ComponentName>
      <S.ComponentContainer></S.ComponentContainer>
    </S.ComponentName>
  );
};

export default ComponentStarter;
