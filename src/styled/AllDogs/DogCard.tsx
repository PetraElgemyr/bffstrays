import { styled } from "styled-components";
import { colors } from "../colors";
import { Col, Row } from "../Common/Common";
import { devices } from "../devices";

export const StyledDiv = styled(Col)`
  justify-content: space-evenly;
  align-items: center;
  padding-top: 5%;
  margin-top: 13%;
  color: black;

  @media screen and (${devices.tablet}) {
    margin-top: 3%;
  }

  @media screen and (${devices.laptop}) {
    margin-top: 0;
  }
`;

export const ColContainer = styled(Col)`
  width: 80%;

  @media screen and (${devices.tablet}) {
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
    width: 95%;
    padding: 0;
  }
  @media screen and (${devices.laptop}) {
    width: 95%;
  }

  @media screen and (${devices.laptop}) {
    gap: 20px;
  }
`;

export const DogCard = styled(Col)`
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  padding: 0;
  margin-top: 10%;
  margin-bottom: 5%;
  background-color: ${colors.primary_green};
  border-radius: 15px;
  outline: 1px ${colors.primary_green};
  overflow: hidden;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  color: white;
  &:hover {
    cursor: pointer;
  }

  @media screen and (${devices.tablet}) {
    width: 28%;
    margin: 0;
    margin-top: 5%;

    &:hover {
      transform: scale(1.05);
      transition: scale 0.7s smooth;
    }
  }

  @media screen and (${devices.laptop}) {
    width: 22%;
    margin-top: 2%;
    margin-bottom: 2%;
  }

  @media screen and (${devices.laptopL}) {
    width: 19%;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
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
  height: 240px;
  object-fit: cover;
  object-position: center;
  border-radius: 10px 10px 0 0;
  margin: 0;
  padding: 0;

  @media screen and (${devices.tablet}) {
    height: 270px;
  }

  @media screen and (${devices.tablet}) {
    height: 300px;
  }
`;

export const CardTitle = styled.h4`
  font-family: "Korolev Medium", "Trebuchet MS", Helvetica, sans-serif;
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
    width: ${({ width }) => (width ? "88%" : "100%")};
  }

  @media screen and (${devices.laptop}) {
    width: ${({ width }) => (width ? "92%" : "100%")};
  }

  @media screen and (${devices.laptopL}) {
    width: ${({ width }) => (width ? "87%" : "100%")};
  }

  @media screen and (${devices.fourK}) {
    width: ${({ width }) => (width ? "86%" : "100%")};
  }
`;
