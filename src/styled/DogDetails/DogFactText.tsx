import { styled } from "styled-components";
import { devices } from "../Variables/devices";

export const DogFactText = styled.span`
  font-family: "Korolev Medium", "Trebuchet MS", Helvetica, sans-serif;
  font-weight: lighter;
  font-style: italic;
`;

export const DogFactTextBold = styled.p`
  font-family: "Korolev Medium", "Trebuchet MS", Helvetica, sans-serif;
  font-weight: bold;
  font-size: 1rem;
  margin: 2%;
  text-align: left;
  line-height: 0.8rem;

  @media screen and (${devices.tablet}) {
    line-height: 1rem;
  }

  @media screen and (${devices.laptop}) {
    line-height: 1.2rem;
  }
`;

export const DogDescription = styled.article`
  width: 85%;
  margin: 10%;
  font-family: "Korolev Medium", "Trebuchet MS", Helvetica, sans-serif;
  line-height: 30px;
`;
