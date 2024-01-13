import { styled } from "styled-components";
import { devices } from "../Variables/devices";

export const CommonText = styled.span`
  line-height: 30px;
  font-family: "Korolev light", "Trebuchet MS", Helvetica, sans-serif;
  margin-top: 10%;
  margin-bottom: 10%;
  width: 95%;

  @media screen and (${devices.tablet}) {
    margin-top: 2%;
    margin-bottom: 5%;
  }
`;
