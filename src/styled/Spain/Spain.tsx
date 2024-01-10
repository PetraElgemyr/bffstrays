import { styled } from "styled-components";
import { Col } from "../Common/Common";
import { devices } from "../devices";
import { CCarousel } from "@coreui/react";

export const ColStart = styled(Col)`
  justify-content: center;
  align-items: flex-start;
  width: 80%;
  margin-bottom: 5%;

  @media screen and (${devices.tablet}) {
    margin-bottom: 2%;
    width: 70%;
  }

  @media screen and (${devices.laptop}) {
    width: 60%;
  }
`;

export const StyledCarouselHeader = styled(CCarousel)`
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  margin-bottom: 10%;

  @media screen and (${devices.tablet}) {
    margin-bottom: 5%;
  }
`;
