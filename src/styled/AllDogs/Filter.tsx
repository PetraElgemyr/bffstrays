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
  padding-right: 10%;
  padding-left: 10%;
  display: flex;
  flex-direction: row;
  /* border-radius: 25px; */
  border-radius: 5px;
  justify-content: center;
  box-shadow: ${({ selected }) =>
    selected ? "0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset" : "none"};
  width: max-content;
  min-height: 48px;
  text-align: center;
  font-size: 1rem;

  &:hover {
    cursor: pointer;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
    background-color: ${colors.tertiary_green};
  }
`;

export const FilterButtonContainer = styled(Row)`
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
`;

export const FilterOptionsContainers = styled(Col)`
  background-color: ${colors.secondary_green};
  padding: 10%;
  overflow: scroll;
  width: 250px;
  min-height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;

  @media screen and (${devices.mobileL}) {
    width: 270px;
  }

  @media screen and (${devices.tablet}) {
    width: 300px;
  }

  @media screen and (${devices.laptop}) {
    width: 350px;
  }

  @media screen and (${devices.laptopL}) {
    width: 400px;
  }

  @media screen and (${devices.fourK}) {
    width: 500px;
  }
`;

// export const FilterOptionsContainers = styled(Col)`
//   background-color: ${colors.secondary_green};
//   padding: 15%;
//   border-radius: 15px;
//   width: 100%;
//   max-height: 40vh;
//   overflow: scroll;
//   overflow-x: hidden;
//   margin-top: 5%;
//   position: fixed; // position it fixed to the viewport
//   z-index: 1000; // make sure it's on top of other content
//   top: 0; // position it at the top of the viewport
//   left: 0; // position it at the left of the viewport
//   width: 100%; // make it span the full width
//   height: 100%; // make it span the full height
//   background: rgba(0, 0, 0, 0.5); // add a semi-transparent background
//   display: flex; // to center the content
//   justify-content: center; // center content horizontally
//   align-items: center; // center content vertically
// `;

// export const FilterOptionsContainers = styled.div`
//   padding: 15%;
//   border-radius: 15px;
//   max-height: 40vh;
//   overflow: scroll;
//   overflow-x: hidden;
//   margin-top: 5%;
//   position: fixed; // position it fixed to the viewport
//   z-index: 1000; // make sure it's on top of other content
//   top: 0; // position it at the top of the viewport
//   left: 0; // position it at the left of the viewport
//   width: 100%; // make it span the full width
//   height: 100%; // make it span the full height
//   background-color: ${colors.secondary_green}; // set the background color
// `;
