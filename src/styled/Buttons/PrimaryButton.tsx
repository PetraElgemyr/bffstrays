import { styled } from "styled-components";
import { colors } from "../colors";
import { IFilterButtonProps } from "../AllDogs/DogCard";

export const PrimaryButton = styled.button<IFilterButtonProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 25px;
  background-color: ${colors.secondary_green};
  min-height: 48px;
  color: ${colors.primary_green};
  font-family: "Korolev Medium", sans-serif;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding: 0 15px 0 15px;
  cursor: pointer;
  box-shadow: ${({ selected }) =>
    selected ? "0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset" : "none"};

  &:hover {
    cursor: pointer;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
  }
`;
