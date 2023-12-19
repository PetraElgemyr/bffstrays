import { styled } from "styled-components";
import { devices } from "./devices";

interface IToggled {
  toggled: number;
}

export const Nav = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #294929;
  position: fixed;
  top: 0;
  left: 0;
  color: white;
`;

export const Logo = styled.div`
  font-size: 2em;
  padding: 0.4em;
  margin: 0;
`;

export const Menu = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  cursor: pointer;
  margin: 10px 15px;
  margin-right: 30px;
`;

export const DropDownMenu = styled.div<IToggled>`
  font-family: "Julius Sans One", sans-serif;
  display: flex;
  transition: top 1s;
  top: ${({ toggled }) => (toggled ? "0" : "-800px")};
  flex-direction: column;
  background-color: #294929;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  position: absolute;
  width: 100vw;
  justify-content: center;
  align-items: center;
  padding-top: 12%;
  padding-bottom: 10%;

  & > ul {
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 0;
    margin: 0;

    & > li {
      display: flex;
      justify-content: center;
      border-bottom: solid transparent 1px;
      transition: all 0.6s;
      color: white;
      &:hover {
        border-bottom: solid white 1px;
      }

      & > a {
        color: white;
      }
    }
  }

  @media screen and (${devices.tablet}) {
    top: ${({ toggled }) => (toggled ? "0" : "-1000px")};
    padding-top: 5%;
    padding-bottom: 5%;
  }
  @media screen and (${devices.desktop}) {
    top: ${({ toggled }) => (toggled ? "0" : "-1500px")};
  }
`;
// const DropDownMenuWithProps = styled(DropDownMenu, {
//   shouldForwardProp: (prop) => isPropValid(prop),
// });

export const HamMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.7rem;
  padding: 0px;
`;

export const HamStick = styled.div<IToggled>`
  position: absolute;
  width: 30px;
  height: 3px;
  border-radius: 1rem;
  background-color: ${({ toggled }) => (toggled ? "transparent" : "white")};
  transition:
    background 0.4s,
    font-size 0s;
  &::before,
  &::after {
    transition: font-size 0s;
    transform-origin: center center;
  }

  &:before,
  &:after {
    transition: font-size 0s;
    content: "";
    display: block;
    position: absolute;
    width: 30px;
    height: 3px;
    background: white;
    border-radius: 1rem;
  }
  &:before {
    margin-top: -0.9em;
    animation: ${({ toggled }) =>
      toggled
        ? "burg2top 0.4s linear forwards"
        : "burg2topReset 0.4s linear forwards"};
  }
  &:after {
    margin-top: 0.9em;
    animation: ${({ toggled }) =>
      toggled
        ? "burg2bottom 0.4s linear forwards;"
        : "burg2bottomReset 0.4s linear forwards"};
  }

  @keyframes burg2top {
    0% {
    }
    20% {
      margin-top: 0em;
      transform: rotate(0deg);
    }
    60% {
      margin-top: 0em;
      transform: rotate(55deg);
    }
    100% {
      margin-top: 0em;
      transform: rotate(45deg);
    }
  }

  @keyframes burg2bottom {
    0% {
    }
    20% {
      margin-top: 0em;
      transform: rotate(0deg);
    }
    60% {
      margin-top: 0em;
      transform: rotate(-55deg);
    }
    100% {
      margin-top: 0em;
      transform: rotate(-45deg);
    }
  }

  @keyframes burg2topReset {
    0% {
      margin-top: 0em;
      transform: rotate(45deg);
    }
    20% {
      transform: rotate(0deg);
    }
    60% {
      margin-top: 0.9em;
      transform: rotate(0deg);
    }
    100% {
      margin-top: 0.9em;
      transform: rotate(0deg);
    }
  }

  @keyframes burg2bottomReset {
    0% {
      margin-top: 0em;
      transform: rotate(-45deg);
    }
    20% {
      transform: rotate(0deg);
    }
    60% {
      margin-top: -0.9em;
      transform: rotate(0deg);
    }
    100% {
      margin-top: -0.9em;
      transform: rotate(0deg);
    }
  }
`;

// export const HamStickWithProps = styled(HamStick).attrs((props) => ({
//   toggled: undefined, // Filter out the "toggled" prop
// }))`
//   // Your styles here
// `;
