import styled from "styled-components";
import { Col } from "../Common/Common";
import { colors } from "../colors";

export interface IFilterButtonProps {
  selected: boolean;
}

export const FilterButton = styled.button<IFilterButtonProps>`
  border: none;
  background-color: ${({ selected }) =>
    selected ? colors.tertiary_green : colors.primary_green};
  color: ${colors.secondary_green};
  margin: 2%;
  padding: 5%;
  display: flex;
  flex-direction: row;
  border-radius: 15px;
  justify-content: center;
  box-shadow: ${({ selected }) =>
    selected ? "0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset" : "none"};

  &:hover {
    cursor: pointer;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
  }
`;

export const FilterOptionsContainers = styled(Col)`
  background-color: ${colors.secondary_green};
  padding: 15%;
  border-radius: 15px;
  width: 100%;
  max-height: 35vh;
  overflow: scroll;
`;
