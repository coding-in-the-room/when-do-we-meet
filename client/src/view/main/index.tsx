import React from "react";
import * as S from "./styles";
import Typist from "react-typist";

interface MainProps {}

const Main: React.FC<MainProps> = () => {
  return (
    <S.Main>
      <S.MainContainer>
        <S.Catchphrase>
          <Typist cursor={{ hideWhenDone: true }}>
            Super easy
            <br />
            decision maker for
            <br />
            meeting time!
          </Typist>
        </S.Catchphrase>
        <S.SubTitle>
          Generate votes for your group and Mark available time,
          <br />
          and we will show when is the most appropriate.
        </S.SubTitle>
        <S.TryButton>Try now!</S.TryButton>
      </S.MainContainer>
    </S.Main>
  );
};

export default Main;
