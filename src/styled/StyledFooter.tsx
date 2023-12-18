import { styled } from "styled-components";
import { devices } from "./devices";
import { colors } from "./colors";

export const StyledFooter = styled.footer`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  padding-left: 10%;
  background-color: ${colors.primary};

  @media screen and (${devices.tablet}) {
    flex-direction: row;
    align-items: center;
    padding-left: 2%;
    padding-top: 3%;
    padding-bottom: 3%;
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

  @media screen and (${devices.tablet}) {
    margin: 1%;
  }
`;

export const FooterColumn = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0;
`;

export const StyledLink = styled.a`
  color: white;
`;