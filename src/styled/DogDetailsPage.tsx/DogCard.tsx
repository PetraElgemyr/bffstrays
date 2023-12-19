import { styled } from "styled-components";
import { colors } from "../colors";

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;
export const DogCard = styled.div`
  width: 80vw;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 5%;
  background-color: ${colors.primary};
  /* border-radius: 15px, 15px, 15px, 15px; */
  border-radius: 15px;
  outline: 1px ${colors.primary};
  overflow: hidden;
`;

export const ImageContainer = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
`;

export const Image = styled.img`
  width: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 10px 10px 0 0;
  margin: 0;
  padding: 0;
`;

export const CardTitle = styled.h4`
  font-family: "Korolev Medium", sans-serif;
  font-size: 1.5rem;
  margin: 5%;
`;

export const CardTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 5%;
`;

export const CardText = styled.span`
  display: block;
  font-size: 1rem;
`;
