import { styled } from "styled-components";
import { devices } from "../devices";
import { CImage } from "@coreui/react";

export const StyledSlideImage = styled(CImage)`
  width: 100%;
  object-fit: cover;

  @media screen and (${devices.tablet}) {
    height: 60vh;
  }

  @media screen and (${devices.laptop}) {
    height: 50vh;
  }
`;

export const SlideTitleContainer = styled.div`
  border-radius: 40px;
  background: rgba(236, 236, 236, 0.6);
  width: 100%;
  height: 55px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media screen and (${devices.tablet}) {
    height: 70px;
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
