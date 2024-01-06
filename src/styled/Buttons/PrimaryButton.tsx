import { styled } from "styled-components";
import { colors } from "../colors";
import { devices } from "../devices";
import { ColCentered } from "../Common/Common";

export const PrimaryButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 25px;
  background-color: ${colors.secondary_green};
  min-height: 48px;
  color: ${colors.primary};
  font-family: "Korolev Medium", sans-serif;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding: 0 15px 0 15px;
`;

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

export const TertiaryButton = styled(SecondaryButton)`
  background-color: ${colors.primary};
`;

export const ColCenteredButtonContainer = styled(ColCentered)`
  width: 85%;
`;
