import { styled } from "styled-components";
import { Col } from "../Common/Common";
import { devices } from "../devices";
import { colors } from "../colors";

export const DogInfoContainer = styled(Col)`
  justify-content: space-evenly;
  align-items: center;
  gap: 15px;
  width: 85vw;
  @media screen and (${devices.tablet}) {
    width: 100vw;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 0;
    background-color: ${colors.primary};
    padding: 0;
    margin: 0;
    height: 60vh;
  }
`;
