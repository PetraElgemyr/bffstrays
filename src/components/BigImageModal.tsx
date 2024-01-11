import "./ModalStyle.css";
import { IDogSlide } from "./pages/DogDetails";
import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { DogSlider } from "./DogSlider";

const Modal = styled.div`
  position: fixed;
  z-index: 990;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  overflow: "auto";
  background-color: rgba(0, 0, 0, 0.8);
`;

const CloseItem = styled.span`
  position: absolute;
  top: 80px;
  right: 35px;
  color: #f1f1f1;
  font-size: 3rem;
  font-weight: "bold";

  &:hover {
    cursor: "pointer";
    transform: "scale(1.1)";
    transition: "transform 0.3s linear";
  }
`;

const modalContent = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "90vw",
  height: "100vh",
  margin: "auto",
};

interface IBigImageModalProps {
  modalIsOpen: boolean;
  setModalIsOpen: (modalIsOpen: boolean) => void;
  slides: IDogSlide[];
  startUrl: string;
}

export const BigImageModal = ({
  modalIsOpen,
  setModalIsOpen,
  slides,
  startUrl,
}: IBigImageModalProps) => {
  const [reorderedSlides, setReorderedSlides] = useState<IDogSlide[]>([]);

  const handleClose = () => {
    setModalIsOpen(false);
  };

  useEffect(() => {
    const currentImageIndex = slides.findIndex(
      (slide) => slide.url === startUrl
    );
    if (currentImageIndex !== -1) {
      const newSlides = [
        ...slides.slice(currentImageIndex),
        ...slides.slice(0, currentImageIndex),
      ];
      setReorderedSlides(newSlides);
    }
  }, [slides, startUrl]);

  return (
    <div className="App2">
      {modalIsOpen && (
        <Modal>
          <CloseItem onClick={handleClose}>STÄNG</CloseItem>
          <div style={modalContent}>
            <DogSlider isDogModal={true} slides={reorderedSlides}></DogSlider>
          </div>
        </Modal>
      )}
    </div>
  );
};
