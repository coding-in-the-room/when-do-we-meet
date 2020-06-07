import React from "react";

import * as S from "./styles";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  timeout?: number;
  children?: React.ReactElement;
}

const Modal: React.FC<ModalProps> = (props) => {
  return (
    <S.Modal
      open={props.open}
      onClose={props.onClose}
      closeAfterTransition
      BackdropComponent={S.ModalBackdrop}
      BackdropProps={{
        timeout: props.timeout ?? 500,
      }}
    >
      <S.ModalFade in={props.open}>{props.children}</S.ModalFade>
    </S.Modal>
  );
};

export default Modal;
