import { styled } from "styled-components";
import { devices } from "../devices";

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ColCentered = styled(Col)`
  justify-content: center;
  align-items: center;
`;

export const RowCentered = styled(Row)`
  justify-content: center;
  align-items: center;
`;

export const ColCenteredResponsive = styled(ColCentered)`
  justify-content: center;
  align-items: flex-start;
  width: 80%;

  @media screen and (${devices.tablet}) {
    align-items: center;
    text-align: center;
  }
`;
