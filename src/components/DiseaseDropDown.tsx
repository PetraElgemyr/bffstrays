import { styled } from "styled-components";
import { devices } from "../styled/devices";
import { colors } from "../styled/colors";
import { Row } from "../styled/Common/Common";

export const DiseaseDropDown = styled(Row)`
  justify-content: space-between;
  align-items: center;
  margin-top: 5%;
  margin-bottom: 5%;
  width: 100%;
  border-bottom: 1px solid black;

  &:hover {
    cursor: pointer;
    color: ${colors.primary_green};
  }

  @media screen and (${devices.tablet}) {
    margin-top: 3%;
    margin-bottom: 3%;
  }

  @media screen and (${devices.laptop}) {
    margin-top: 2%;
    margin-bottom: 2%;
  }
`;
