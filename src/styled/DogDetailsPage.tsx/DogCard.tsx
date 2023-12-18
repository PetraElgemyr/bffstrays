import { styled } from "styled-components";
import { colors } from "../colors";

export const DogCard = styled.div`
  width: 80vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${colors.primary};
`;

export const ImageContainer = styled.div`
  width: 100%;
  max-height: 60%;
`;

export const Image = styled.img`
  width: 100%;
  object-fit: cover;
  object-position: center;
`;
