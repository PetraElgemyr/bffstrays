import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  Nav,
  Logo,
  Menu,
  HamMenu,
  HamStick,
  DropDownMenu,
  NavLogoImage,
  MenuContainer,
} from "../styled/Navigation";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import { PageName } from "./enums/PageName";
import "../scss/navbar.scss";
import { useAppContext } from "./hooks/useAppContext";

export const Navbar = () => {
  const { logo } = useAppContext();
  const [toggled, setToggled] = useState(false);
  const [dropDownToShow, setDropDownToShow] = useState<string>("");
  const [dropDownLinks, setDropDownLinks] = useState<JSX.Element>(<></>);
  const navigate = useNavigate();

  const checkDropDownToShow = (dropDownText: string) => {
    if (dropDownText === PageName.Dogs.toLowerCase()) {
      setDropDownLinks(
        <div className={"dropdown__content--active"}>
          <li>
            <Link
              to="/hundarna/hundar-som-soker-hem"
              onClick={() => {
                setToggled(!toggled);
              }}
            >
              Hundar som söker hem
            </Link>
          </li>
          <li>
            <Link
              to="/hundarna/adopterade-hundar"
              onClick={() => setToggled(!toggled)}
            >
              Adopterade hundar
            </Link>
          </li>
        </div>
      );
    } else if (dropDownText === PageName.Spain.toLowerCase()) {
      setDropDownLinks(
        <div className={"dropdown__content--active"}>
          <li>
            <Link
              to="/situationen-i-spanien"
              onClick={() => {
                setToggled(!toggled);
              }}
            >
              Situationen i Spanien
            </Link>
          </li>
          <li>
            <Link
              to="/situationen-i-spanien/myter-om-gatuhundar"
              onClick={() => {
                setToggled(!toggled);
              }}
            >
              Myter om gatuhundar
            </Link>
          </li>

          <li>
            <Link
              to="/situationen-i-spanien/sjukdomar"
              onClick={() => setToggled(!toggled)}
            >
              Sjukdomar
            </Link>
          </li>
        </div>
      );
    } else if (dropDownText === PageName.Adoption.toLowerCase()) {
      setDropDownLinks(
        <div className={"dropdown__content--active"}>
          <li>
            <Link
              to="/om-adoption"
              onClick={() => {
                setToggled(!toggled);
              }}
            >
              Adoption via Bff Strays
            </Link>
          </li>
          <li>
            <Link
              to="/om-adoption/krav-pa-adoptorer"
              onClick={() => {
                setToggled(!toggled);
              }}
            >
              Krav på adoptörer
            </Link>
          </li>
        </div>
      );
    } else if (dropDownText === PageName.About.toLowerCase()) {
      setDropDownLinks(
        <div className={"dropdown__content--active"}>
          <li>
            <Link
              to="/om-oss"
              onClick={() => {
                setToggled(!toggled);
              }}
            >
              {PageName.About}
            </Link>
          </li>
          <li>
            <Link
              to="/om-oss/vart-arbetssatt"
              onClick={() => {
                setToggled(!toggled);
              }}
            >
              {PageName.WorkEthics}
            </Link>
          </li>
        </div>
      );
    } else {
      setDropDownLinks(<></>);
    }
  };

  const imageUrl =
    `https:${logo?.logoImg?.fields?.file?.url?.toString()}` || "";
  return (
    <Nav style={{ zIndex: 999 }}>
      <Logo
        onClick={() => {
          navigate("/");
        }}
      >
        <NavLogoImage src={imageUrl} alt="Bff Strays logo" />
      </Logo>
      <MenuContainer
        onClick={() => {
          setToggled(!toggled);
          setDropDownToShow("");
          setDropDownLinks(<></>);
        }}
      >
        <Menu>
          <HamMenu>
            <HamStick toggled={+toggled} />
          </HamMenu>
        </Menu>
      </MenuContainer>
      <DropDownMenu toggled={+toggled}>
        <ul>
          <li>
            <Link
              to="/"
              onClick={() => {
                setToggled(!toggled);
              }}
            >
              {PageName.Home}
            </Link>
          </li>
          <li
            onClick={() => {
              if (dropDownToShow === PageName.Dogs.toLowerCase()) {
                setDropDownToShow("");
              } else {
                setDropDownToShow(PageName.Dogs.toLowerCase());
                checkDropDownToShow(PageName.Dogs.toLowerCase());
              }
            }}
          >
            Hundarna
            {dropDownToShow !== PageName.Dogs.toLowerCase() ? (
              <KeyboardArrowDownRoundedIcon />
            ) : (
              <KeyboardArrowUpRoundedIcon />
            )}
          </li>
          {dropDownToShow === PageName.Dogs.toLowerCase()
            ? dropDownLinks
            : null}
          <li
            onClick={() => {
              if (dropDownToShow === PageName.About.toLowerCase()) {
                setDropDownToShow("");
              } else {
                setDropDownToShow(PageName.About.toLowerCase());
                checkDropDownToShow(PageName.About.toLowerCase());
              }
            }}
          >
            {PageName.About}
            {dropDownToShow !== PageName.About.toLowerCase() ? (
              <KeyboardArrowDownRoundedIcon />
            ) : (
              <KeyboardArrowUpRoundedIcon />
            )}
          </li>
          {dropDownToShow === PageName.About.toLowerCase()
            ? dropDownLinks
            : null}

          <li
            onClick={() => {
              if (dropDownToShow === PageName.Adoption.toLowerCase()) {
                setDropDownToShow("");
              } else {
                setDropDownToShow(PageName.Adoption.toLowerCase());
                checkDropDownToShow(PageName.Adoption.toLowerCase());
              }
            }}
          >
            Adoption
            {dropDownToShow !== PageName.Adoption.toLowerCase() ? (
              <KeyboardArrowDownRoundedIcon />
            ) : (
              <KeyboardArrowUpRoundedIcon />
            )}
          </li>
          {dropDownToShow === PageName.Adoption.toLowerCase()
            ? dropDownLinks
            : null}
          <li
            onClick={() => {
              if (dropDownToShow === PageName.Spain.toLowerCase()) {
                setDropDownToShow("");
              } else {
                setDropDownToShow(PageName.Spain.toLowerCase());
                checkDropDownToShow(PageName.Spain.toLowerCase());
              }
            }}
          >
            {PageName.Spain}
            {dropDownToShow !== PageName.Spain.toLowerCase() ? (
              <KeyboardArrowDownRoundedIcon />
            ) : (
              <KeyboardArrowUpRoundedIcon />
            )}
          </li>
          {dropDownToShow === PageName.Spain.toLowerCase()
            ? dropDownLinks
            : null}

          <li>
            <Link to="/donera" onClick={() => setToggled(!toggled)}>
              {PageName.Donate}
            </Link>
          </li>
          <li>
            <Link to="/intresseanmalan" onClick={() => setToggled(!toggled)}>
              {PageName.RegisterInterest}
            </Link>
          </li>
          <li>
            <Link
              to="/kontakt"
              onClick={() => {
                setToggled(!toggled);
              }}
            >
              {PageName.Contact}
            </Link>
          </li>
        </ul>
      </DropDownMenu>
    </Nav>
  );
};
