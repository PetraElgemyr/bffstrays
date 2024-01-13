import { styled } from "styled-components";
import { Col } from "../Common/Common";
import { colors } from "../Variables/colors";
import { devices } from "../Variables/devices";

export const DogFactsContainer = styled(Col)`
  outline: 3px solid ${colors.primary_green};
  width: 100%;
  border-radius: 15px;
  align-items: center;
  padding-bottom: 5%;

  @media screen and (${devices.tablet}) {
    outline: none;
    width: 50%;
    border-radius: 0;
    height: 80%;
    color: white;
    padding-bottom: 2%;
  }
`;
