import { IDogSlide } from "./pages/DogDetails";
import { useEffect, useState } from "react";
import { DogSlider } from "./DogSlider";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { CloseModalItem, Modal, ModalContent } from "../styled/Home/Modal";

interface IImageModalProps {
  modalIsOpen: boolean;
  setModalIsOpen: (modalIsOpen: boolean) => void;
  slides: IDogSlide[];
  startUrl: string;
  adoptedDogsBackground: boolean;
}

export const ImageModal = ({
  modalIsOpen,
  setModalIsOpen,
  slides,
  startUrl,
  adoptedDogsBackground,
}: IImageModalProps) => {
  const [reorderedSlides, setReorderedSlides] = useState<IDogSlide[]>([]);

  const handleClose = () => {
    setModalIsOpen(false);
  };

  useEffect(() => {
    if (slides.length > 1) {
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
    } else {
      setReorderedSlides(slides);
    }
  }, [slides, startUrl]);

  return (
    <div>
      {modalIsOpen && (
        <Modal
          backgroundcolor={
            adoptedDogsBackground ? "rgba(0, 0, 0, 0.3)" : "rgba(0, 0, 0, 0.75)"
          }
        >
          <CloseModalItem onClick={handleClose}>
            <span>Stäng bild</span> <CloseRoundedIcon fontSize="large" />
          </CloseModalItem>
          <ModalContent>
            <DogSlider isDogModal={true} slides={reorderedSlides}></DogSlider>
          </ModalContent>
        </Modal>
      )}
    </div>
  );
};
