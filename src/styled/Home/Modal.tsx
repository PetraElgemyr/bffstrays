import { styled } from "styled-components";

interface IModalProps {
  backgroundcolor: string;
}

export const Modal = styled.div<IModalProps>`
  position: fixed;
  z-index: 990;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  overflow: "auto";
  background-color: ${(props) => props.backgroundcolor};
`;

export const CloseModalItem = styled.span`
  position: absolute;
  top: 80px;
  right: 35px;
  color: #f1f1f1;
  font-size: 1.5rem;
  font-weight: "bold";
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: "pointer";
    transform: "scale(1.1)";
    transition: "transform 0.3s linear";
  }
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90vw;
  height: 100vh;
  margin: auto;
`;
