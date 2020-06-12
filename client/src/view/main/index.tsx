import React from "react";
import * as S from "./styles";
import Typist from "react-typist";

interface MainProps {}

const ComponentStarter: React.FC<MainProps> = () => {
  return (
    <S.FlexBoxContainer>
      <S.FlexBox>
        <S.Catchphrase>
          <Typist cursor={{ hideWhenDone: true }}>
            Super easy
            <br />
            decision maker for
            <br />
            meeting time!
          </Typist>
        </S.Catchphrase>
        <S.Text>
          Generate votes for your group and Mark available time,
          <br />
          and we will show when is the most appropriate.
        </S.Text>
        <S.TryButton>Try now!</S.TryButton>
      </S.FlexBox>
    </S.FlexBoxContainer>
  );
};

export default ComponentStarter;
