import { styled } from "styled-components";
import { colors } from "../colors";
import { Col, Row } from "../Common/Common";

export const StyledDiv = styled(Col)`
  justify-content: space-evenly;
  align-items: center;
  padding-top: 5%;
`;
export const DogCard = styled(Col)`
  justify-content: center;
  align-items: flex-start;
  width: 80vw;
  padding: 0;
  margin: 5%;
  background-color: ${colors.primary};
  border-radius: 15px;
  outline: 1px ${colors.primary};
  overflow: hidden;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
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

export const CardTextContainer = styled(Col)`
  justify-content: center;
  align-items: flex-start;
  margin: 5%;
  margin-top: 0;
  width: 90%;
`;

export const CardText = styled.span`
  display: block;
  font-size: 1rem;
`;

export const SortButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 25px;
  background-color: ${colors.secondary_green};
  min-height: 48px;
  color: ${colors.primary};
  font-family: "Korolev Medium", sans-serif;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding: 0 15px 0 15px;
`;

export const ButtonContainer = styled(Row)<{ width?: string }>`
  width: ${({ width }) => (width ? width : "100%")};
  justify-content: space-between;
`;
