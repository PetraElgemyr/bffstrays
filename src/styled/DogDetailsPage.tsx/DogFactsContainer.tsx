import { styled } from "styled-components";
import { Col } from "../Common/Common";
import { colors } from "../colors";
import { devices } from "../devices";

export const DogFactsContainer = styled(Col)`
  outline: 3px solid ${colors.primary};
  width: 100%;
  border-radius: 15px;
  /* height: 100%; */
  align-items: center;
  padding-bottom: 5%;
  @media screen and (${devices.tablet}) {
    outline: none;
    width: 40vw;
    border-radius: 0;
    height: 80%;
    color: white;
  }
`;
