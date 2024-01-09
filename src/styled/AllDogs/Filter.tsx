import styled from "styled-components";
import { Col, Row } from "../Common/Common";
import { colors } from "../colors";
import { devices } from "../devices";

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
  border-radius: 25px;
  justify-content: center;
  box-shadow: ${({ selected }) =>
    selected ? "0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset" : "none"};
  width: max-content;
  min-height: 48px; // förstör textens centrering
  line-height: 1.9rem; // pga min height
  text-align: center;
  font-size: 1rem;

  &:hover {
    cursor: pointer;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
  }
`;

export const FilterButtonContainer = styled(Row)`
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
`;

export const FilterOptionsContainers = styled(Col)`
  background-color: ${colors.secondary_green};
  padding: 15%;
  border-radius: 15px;
  width: 100%;
  max-height: 40vh;
  overflow: scroll;
  overflow-x: hidden;
  margin-top: 5%;

  @media screen and (${devices.tablet}) {
    width: 50%;
    max-height: 50vh;
  }
`;
