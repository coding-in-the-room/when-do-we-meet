import styled from "styled-components/macro";
import MaterialModal from "@material-ui/core/Modal";
import MaterialBackdrop from "@material-ui/core/Backdrop";
import MaterialFade from "@material-ui/core/Fade";

export const Modal = styled(MaterialModal)`
  && {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const ModalContainer = styled.div``;

export const ModalBackdrop = styled(MaterialBackdrop)``;

export const ModalFade = styled(MaterialFade)`
  outline: none;
`;
