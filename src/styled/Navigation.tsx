import { styled } from "styled-components";
import { devices } from "./devices";

interface IToggled {
  toggled: number;
}

export const BehindNavigationDiv = styled.div`
  height: 50px;
  width: 100%;

  @media screen and (${devices.tablet}) {
    height: 65px;
  }

  @media screen and (${devices.laptop}) {
    height: 70px;
  }
`;

export const Nav = styled.div`
  width: 100vw;
  max-height: 70px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #294929;
  position: fixed;
  top: 0;
  left: 0;
  color: white;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  @media screen and (${devices.mobileL}) {
    margin-right: 70px;
    max-height: unset;
  }

  @media screen and (${devices.tablet}) {
    margin-right: 80px;
  }

  @media screen and (${devices.laptop}) {
    margin-right: 85px;
  }
  @media screen and (${devices.laptopL}) {
  }
`;

export const Logo = styled.div`
  padding: 5px;
  margin: 0;
  object-fit: contain;

  @media screen and (${devices.tablet}) {
    padding: 10px;
  }

  @media screen and (${devices.fourK}) {
    padding: 20px;
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: column;
  margin: 10px;
  margin-right: 30px;

  &:hover {
    cursor: pointer;
  }

  @media screen and (${devices.tablet}) {
    margin-right: 50px;
  }

  @media screen and (${devices.laptop}) {
    margin-right: 60px;
  }

  @media screen and (${devices.laptopL}) {
    margin-right: 70px;
  }
`;

export const Menu = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

export const DropDownMenu = styled.div<IToggled>`
  font-family: "Korolev Medium", "Trebuchet MS", Helvetica, sans-serif;
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
  padding-top: 50px;
  padding-bottom: 50px;
  max-height: 100vh; /* or any other value that suits your needs */
  overflow-y: auto;

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
        cursor: pointer;
      }

      & > a {
        color: white;
        text-decoration: none;
      }
    }
  }

  @media screen and (${devices.mobileL}) {
    padding-top: 60px;
  }

  @media screen and (${devices.tablet}) {
    top: ${({ toggled }) => (toggled ? "0" : "-1000px")};
    padding-top: 70px;
    padding-bottom: 60px;
  }

  @media screen and (${devices.laptop}) {
    top: ${({ toggled }) => (toggled ? "0" : "-1500px")};
  }

  @media screen and (${devices.laptopL}) {
    padding-top: 80px;
    padding-bottom: 70px;
  }
`;

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

export const NavLogoImage = styled.img`
  max-width: 85%;
  max-height: 50px;

  &:hover {
    cursor: pointer;
  }

  @media screen and (${devices.mobileL}) {
    width: 60%;
    max-height: unset;
  }

  @media screen and (${devices.tablet}) {
    width: 30%;
  }

  @media screen and (${devices.laptop}) {
    width: 25%;
  }

  @media screen and (${devices.laptopL}) {
    width: 28%;
  }
`;
