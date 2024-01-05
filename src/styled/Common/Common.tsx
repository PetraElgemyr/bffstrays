import { styled } from "styled-components";

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
