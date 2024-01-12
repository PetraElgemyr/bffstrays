import { styled } from "styled-components";
import { Col } from "../Common/Common";
import { colors } from "../Variables/colors";

export const LinkCard = styled(Col)`
  justify-content: flex-start;
  align-items: flex-start;
  width: 80%;
  margin-top: 10%;
  margin-bottom: 5%;
  background-color: ${colors.primary_blue};
  border-radius: 15px;
  outline: 1px ${colors.primary_green};
  overflow: hidden;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  color: white;
`;
