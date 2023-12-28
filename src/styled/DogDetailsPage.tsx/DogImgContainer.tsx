import { styled } from "styled-components";
import { devices } from "../devices";

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
    max-width: 50%;
  }
`;

export const DogImg = styled.img`
  width: 100%;
  border-radius: 15px;

  @media screen and (${devices.tablet}) {
    height: 100%;
    border-radius: 0;
    max-width: 50%;
    background-size: contain;
    background-repeat: no-repeat;
  }
`;
