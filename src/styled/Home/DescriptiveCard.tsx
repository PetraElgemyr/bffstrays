import { styled } from "styled-components";
import { Col } from "../Common/Common";
import { colors } from "../colors";
import { devices } from "../devices";
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

  @media screen and (${devices.tablet}) {
    width: 100%;
    padding: 0;
    margin: 0;
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
    bgcolor === "blue" ? colors.primary_blue : colors.primary};
  border-radius: 15px;
  outline: 1px ${colors.primary};
  overflow: hidden;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  color: white;

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
    width: 65%;
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
export const DescriptiveCardTitle = styled.p`
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
    font-size: 2.3rem;
  }
`;

export const DescriptiveCardText = styled.p`
  font-size: 1rem;

  @media screen and (${devices.laptop}) {
    font-size: 1.2rem;
  }

  @media screen and (${devices.laptopL}) {
    font-size: 1.8rem;
  }
`;

export const TextContainer = styled(CardTextContainer)`
  @media screen and (${devices.tablet}) {
    margin: 2%;
    justify-content: space-evenly;
  }
`;
