import { styled } from "styled-components";
import { devices } from "../devices";
import { CCarousel } from "@coreui/react";
// import { CImage } from "@coreui/react";

export const DogImgContainer1 = styled.div`
  width: 100%;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (${devices.tablet}) {
    height: 100%;
    border-radius: 0;
    max-width: 55%;
    margin: 0;
    padding: 0;
  }
`;

export const DogImg = styled.img`
  width: 100%;
  border-radius: 15px;
  max-height: 50vh;
  position: relative;
  object-fit: cover;
  object-position: center 30%;

  @media screen and (${devices.mobileL}) {
    max-height: 60vh;
  }

  @media screen and (${devices.tablet}) {
    max-height: 70vh;
    margin: 0;
    border-radius: 0;
  }

  @media screen and (${devices.laptop}) {
    max-height: 75vh;
  }
`;

// export const CarouselImage = styled(CImage)`
//   border-radius: 15px;
// `;

export const Carousel = styled(CCarousel)`
  width: 90%;
  margin-bottom: 10%;
  margin-top: 10%;

  @media screen and (${devices.tablet}) {
    width: 70%;
    margin-top: 5%;
  }
`;
