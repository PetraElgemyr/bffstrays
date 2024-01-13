import { styled } from "styled-components";
import { devices } from "../Variables/devices";

export const Col = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ColCentered = styled(Col)`
  justify-content: center;
  align-items: center;
`;

export const ColStart = styled(Col)`
  justify-content: center;
  align-items: flex-start;
  width: 80%;
  margin-bottom: 5%;

  @media screen and (${devices.tablet}) {
    margin-top: 0;
    margin-bottom: 2%;
    width: 70%;
  }

  @media screen and (${devices.laptop}) {
    width: 60%;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
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
  background-color: rgba(37, 37, 37, 0.146);
  border-radius: 3cqmin;
  margin-top: 15px;
  margin-bottom: 15px;

  @media screen and (${devices.tablet}) {
    margin-top: 40px;
    margin-bottom: 40px;
    width: 90%;
    height: 3px;
  }

  @media screen and (${devices.laptopL}) {
    height: 4px;
  }
`;
