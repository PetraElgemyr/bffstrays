import "./ModalStyle.css";
import { ModalContent } from "./ImageModal";
import { IDogSlide } from "./pages/DogDetails";
import { useEffect, useState } from "react";

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

  //   const closeModal = (event: React.KeyboardEvent) => {
  //     if (
  //       event.type === "keydown" &&
  //       ((event as React.KeyboardEvent).key === "Tab" ||
  //         (event as React.KeyboardEvent).key === "Shift")
  //     ) {
  //       setModalIsOpen(false);
  //     }
  //   };
  const closeModal = (event: React.KeyboardEvent) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift" || event.key === "Escape")
    ) {
      setModalIsOpen(false);
    }
  };

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
        <ModalContent
          slides={reorderedSlides}
          onClose={handleClose}
          onKeyDown={closeModal}
        />
      )}
    </div>
  );
};
