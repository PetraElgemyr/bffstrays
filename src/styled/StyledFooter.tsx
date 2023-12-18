import { styled } from "styled-components";
import { devices } from "./devices";
import { colors } from "./colors";

export const StyledFooter = styled.footer`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  padding-left: 15%;
  background-color: ${colors.primary};

  @media screen and (${devices.tablet}) {
  }
`;

export const FooterRow = styled.div`
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 2%;
`;

export const FooterColumn = styled(FooterRow)`
  flex-direction: column;
  align-items: flex-start;
`;
