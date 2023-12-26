import { styled } from "styled-components";
import { devices } from "../devices";

interface IDogImgContainerProps {
  url: string;
}

export const DogImgContainer = styled.div<IDogImgContainerProps>`
  width: 100%;
  height: 40vh;
  flex-shrink: 0;
  border-radius: 15px;
  background: url(${({ url }) => (url ? url : "")});
  background-position: center;
  background-size: cover;

  @media screen and (${devices.tablet}) {
    width: 55vw;
    height: auto;
    border-radius: 0; /*
    flex-shrink: 0; */
    flex-grow: 1;
  }
`;
