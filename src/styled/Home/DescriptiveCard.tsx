import { styled } from "styled-components";
import { Col } from "../Common/Common";
import { colors } from "../Variables/colors";
import { devices } from "../Variables/devices";
import { CardTextContainer, ImageContainer } from "../AllDogs/DogCard";

interface IDogCardProps {
  bgcolor: string;
}

export const StyledDivCardContainer = styled(Col)`
  justify-content: space-evenly;
  align-items: center;
  padding-top: 5%;
  margin-top: 15%;
  color: black;

  @media screen and (${devices.tablet}) {
    padding: 0;
    margin-top: 5%;
  }
`;

export const CardContainer = styled(Col)`
  width: 80%;
  margin-top: 5%;
  margin-bottom: 5%;

  @media screen and (${devices.tablet}) {
    width: 100%;
    padding: 0;
    margin: 0;
    justify-content: space-evenly;
    align-items: center;
  }
`;

export const DescriptiveCard = styled(Col)<IDogCardProps>`
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  padding: 0;
  margin-top: 10%;
  margin-bottom: 5%;
  background-color: ${({ bgcolor }) =>
    bgcolor === "blue" ? colors.primary_blue : colors.primary_green};
  border-radius: 15px;
  outline: 1px ${colors.primary_green};
  overflow: hidden;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  color: white;

  &:hover {
    cursor: pointer;
  }

  @media screen and (${devices.tablet}) {
    border-radius: 0;
    flex-direction: row;
    align-items: center;
    margin-top: 0;
    margin-bottom: 5%;
  }
`;

export const DescriptiveImageContainer = styled(ImageContainer)`
  @media screen and (${devices.tablet}) {
    max-width: 45%;
  }

  @media screen and (${devices.laptop}) {
    max-width: 45%;
  }
`;

export const DescriptiveInfoImageContainer = styled(ImageContainer)`
  @media screen and (${devices.tablet}) {
    width: 45%;
  }
`;

export const DescriptiveImage = styled.img`
  width: 100%;
  border-radius: 10px 10px 0 0;
  margin: 0;
  padding: 0;

  @media screen and (${devices.tablet}) {
    border-radius: 0;
  }
`;

export const DescriptiveInfoImage = styled(DescriptiveImage)`
  width: 100%;
  height: 250px;
  object-fit: cover;
  object-position: center;
  border-radius: 10px 10px 0 0;
  margin: 0;
  padding: 0;

  @media screen and (${devices.tablet}) {
    border-radius: 0;
    height: 300px;
  }
`;

export const DescriptiveCardTitle = styled.p`
  font-family: "Korolev Medium", "Trebuchet MS", Helvetica, sans-serif;

  font-size: 1.5rem;
  margin-bottom: 3%;
  margin-top: 6%;

  @media screen and (${devices.tablet}) {
    margin-top: 2%;
  }

  @media screen and (${devices.laptop}) {
    margin-top: 1%;
    font-size: 1.8rem;
  }

  @media screen and (${devices.laptopL}) {
    font-size: 2.2rem;
  }
`;

export const DescriptiveCardText = styled.p`
  font-size: 1rem;

  @media screen and (${devices.laptopL}) {
    font-size: 1.5rem;
  }
`;

export const TextContainer = styled(CardTextContainer)`
  @media screen and (${devices.tablet}) {
    margin: 2%;
    justify-content: space-evenly;
  }
`;
