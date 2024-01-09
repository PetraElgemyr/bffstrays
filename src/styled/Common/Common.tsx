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

export const DividerLine = styled.div`
  height: 2px;
  width: 100%;
  border-bottom: 2px solid rgba(37, 37, 37, 0.146);
  margin-top: 15px;
  margin-bottom: 15px;

  @media screen and (${devices.tablet}) {
    margin-top: 40px;
    margin-bottom: 40px;
    height: 5px;
    border-bottom: 3px solid rgba(37, 37, 37, 0.146);
    width: 90%;
  }
`;
