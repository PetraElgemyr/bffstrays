import { styled } from "styled-components";
import { devices } from "../devices";
import { CCarouselCaption, CImage } from "@coreui/react";

// export const StyledCarouselCaption = styled(CCarouselCaption)`
//   display: flex;
//   width: 100% !important;

//   @media screen and (${devices.laptop}) {
//     width: 100vw !important;
//     justify-content: center;
//     align-items: center;
//   }
// `;

export const StyledCarouselCaption = styled(CCarouselCaption)`
  display: block;
  margin: 0;
  padding: 0;
  width: 100vw !important;
  margin-bottom: 6%;

  @media screen and (${devices.tablet}) {
    margin-bottom: 4%;
    position: absolute;
    left: 0;
    right: 0;
    width: 100vw !important;
  }
`;

export const StyledSlideImage = styled(CImage)`
  width: 100%;
  object-fit: cover;
  object-position: center;

  @media screen and (${devices.tablet}) {
    height: 70vh;
    position: relative;
    left: 0;
  }
`;

export const SlideTitleContainer = styled.div`
  border-radius: 40px;
  background: rgba(236, 236, 236, 0.6);
  width: 80%;
  height: 50px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin: 0;

  @media screen and (${devices.tablet}) {
    height: 70px;
    border-radius: 0;
    width: 100vw;
  }

  @media screen and (${devices.laptop}) {
    height: 75px;
  }
`;

export const SlideTitleText = styled.h5`
  font-family: "Korolev Medium", sans-serif;
  color: black;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-align: center;
  margin: 0;
  @media screen and (${devices.tablet}) {
    font-size: 1.5rem;
  }
`;
