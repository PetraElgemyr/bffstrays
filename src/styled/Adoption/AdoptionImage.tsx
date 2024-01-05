import { styled } from "styled-components";
import { devices } from "../devices";

export const AdoptionImage = styled.img`
  width: 100%;
  object-fit: cover;
  object-position: center;

  @media screen and (${devices.tablet}) {
    height: 70vh;
    position: relative;
    left: 0;
  }
`;
