import { styled } from "styled-components";
import { Col } from "../Common/Common";
import { devices } from "../Variables/devices";
import { colors } from "../Variables/colors";

export const DogInfoContainer = styled(Col)`
  justify-content: space-evenly;
  align-items: center;
  gap: 15px;
  width: 85vw;
  margin-bottom: 5%;

  @media screen and (${devices.tablet}) {
    width: 100vw;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 0;
    background-color: ${colors.primary_green};
    padding: 0;
  }

  @media screen and (${devices.laptop}) {
    justify-content: space-between;
  }
`;
