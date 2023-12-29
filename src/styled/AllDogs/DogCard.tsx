import { styled } from "styled-components";
import { colors } from "../colors";
import { Col, Row } from "../Common/Common";
import { devices } from "../devices";

interface IDogCardProps {
  bgcolor: string;
}

export const StyledDiv = styled(Col)`
  justify-content: space-evenly;
  align-items: center;
  padding-top: 5%;
  margin-top: 15%;
  color: black;

  @media screen and (${devices.laptop}) {
    margin-top: 5%;
  }
`;

export const ColContainer = styled(Col)`
  width: 80%;

  @media screen and (${devices.tablet}) {
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
    width: 95%;
    /* justify-content: flex-start; */
    padding: 0;
  }
  @media screen and (${devices.laptop}) {
    width: 100%;
  }
`;

export const DogCard = styled(Col)<IDogCardProps>`
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  padding: 0;
  margin-top: 10%;
  margin-bottom: 5%;
  background-color: ${({ bgcolor }) =>
    bgcolor === "blue" ? colors.primary_blue : colors.primary};
  border-radius: 15px;
  outline: 1px ${colors.primary};
  overflow: hidden;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  color: white;

  @media screen and (${devices.tablet}) {
    width: 30%;
    margin: 0;
    margin-top: 5%;
  }

  @media screen and (${devices.laptop}) {
    width: 27%;
    margin-top: 2%;
    margin-bottom: 2%;
    /* height: max-content; */
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  /* height: 65%; */
  margin: 0;
  padding: 0;
  object-fit: cover;
  object-position: center;

  @media screen and (${devices.laptop}) {
    height: unset;
  }

  @media screen and (${devices.fourK}) {
  }
`;

export const Image = styled.img`
  width: 100%;
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
  margin: 6%;
  margin-top: 0;
  width: 90%;
`;

export const CardText = styled.span`
  display: block;
  font-size: 1rem;

  @media screen and (${devices.tablet}) {
    font-size: 1.1rem;
  }

  @media screen and (${devices.laptop}) {
    font-size: 1.2rem;
  }
`;

export const ButtonContainer = styled(Row)<{ width?: string }>`
  width: ${({ width }) => (width ? width : "100%")};
  justify-content: space-between;
  margin-top: 5%;

  @media screen and (${devices.tablet}) {
    width: ${({ width }) => (width ? "90%" : "100%")};
  }
`;

export const FilterButton = styled.button`
  border: none;
  background-color: ${colors.primary};
  color: ${colors.secondary_green};
  margin: 2%;
  padding: 5%;
  display: flex;
  flex-direction: row;
  border-radius: 15px;
  justify-content: center;
`;

export const FilterOptionsContainers = styled(Col)`
  background-color: ${colors.secondary_green};
  padding: 15%;
  border-radius: 15px;
  width: 100%;
  max-height: 35vh;
  overflow: scroll;
`;
