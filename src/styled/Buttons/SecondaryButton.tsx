import styled from "styled-components";
import { devices } from "../Variables/devices";
import { PrimaryButton } from "./PrimaryButton";

export const SecondaryButton = styled(PrimaryButton)`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 5%;
  width: 80%;

  @media screen and (${devices.tablet}) {
    width: 40%;
    margin: 3%;
  }

  @media screen and (${devices.laptop}) {
    width: 30%;
  }
`;
