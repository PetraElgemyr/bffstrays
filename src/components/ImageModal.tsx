// import { styled } from "styled-components";
// import { DogSlider } from "./DogSlider";
// import { IDogSlide } from "./pages/DogDetails";

// const Modal = styled.div`
//   position: fixed;
//   z-index: 1;
//   left: 0;
//   top: 0;
//   width: 100vw;
//   height: 100vh;
//   overflow: "auto";
//   background-color: rgba(0, 0, 0, 0.8);
// `;

// const CloseItem = styled.span`
//   position: absolute;
//   top: 80px;
//   right: 35px;
//   color: #f1f1f1;
//   font-size: 3rem;
//   font-weight: "bold";

//   &:hover {
//     cursor: "pointer";
//     transform: "scale(1.1)";
//     transition: "transform 0.3s linear";
//   }
// `;

// const modalContent = {
//   display: "flex",
//   alignItems: "center",
//   width: "85%",
//   height: "100%",
//   margin: "auto",
// };

// interface IModalContentProps {
//   onClose: () => void;
//   slides: IDogSlide[];
//   onKeyDown: (event: React.KeyboardEvent) => void;
// }

// export const ModalContent = ({ onClose, slides }: IModalContentProps) => {
//   return (
//     <>
//       <Modal>
//         <CloseItem onClick={onClose}>STÄNG</CloseItem>
//         <div style={modalContent}>
//           <DogSlider slides={slides}></DogSlider>
//         </div>
//       </Modal>
//     </>
//   );
// };
