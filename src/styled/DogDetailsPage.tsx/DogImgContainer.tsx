import { styled } from "styled-components";
import { devices } from "../devices";

interface IDogImgContainerProps {
  url: string;
}

export const DogImgContainer = styled.div<IDogImgContainerProps>`
  width: 100%;
  height: 50vh;
  flex-shrink: 0;
  border-radius: 15px;
  background: url(${({ url }) => (url ? url : "")});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;

  @media screen and (${devices.tablet}) {
    height: 100%;
    border-radius: 0;
    max-width: 50%;
    background-size: contain;
    background-repeat: no-repeat;
  }

  @media screen and (${devices.laptop}) {
    max-width: 40%;

    margin: 0;
  }
`;
