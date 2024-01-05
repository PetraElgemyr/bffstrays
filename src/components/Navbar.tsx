import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  Nav,
  Logo,
  Menu,
  HamMenu,
  HamStick,
  DropDownMenu,
} from "../styled/Navigation";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import { PageName } from "./enums/PageName";

export const Navbar = () => {
  const [toggled, setToggled] = useState(false);
  const [dropDownToShow, setDropDownToShow] = useState<string>("");
  const [dropDownLinks, setDropDownLinks] = useState<JSX.Element>(<></>);
  const navigate = useNavigate();
  const checkDropDownToShow = (dropDownText: string) => {
    if (dropDownText === PageName.Dogs.toLowerCase()) {
      setDropDownLinks(
        <>
          <li>
            <Link
              to="/hundar-som-soker-hem"
              onClick={() => {
                setToggled(!toggled);
              }}
            >
              Hundar som söker hem
            </Link>
          </li>

          <li>
            <Link to="/adopterade-hundar" onClick={() => setToggled(!toggled)}>
              Adopterade hundar
            </Link>
          </li>
        </>
      );
    } else if (dropDownText === PageName.Spain.toLowerCase()) {
      setDropDownLinks(
        <>
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
              to="/myter-om-gatuhundar"
              onClick={() => {
                setToggled(!toggled);
              }}
            >
              Myter om gatuhundar
            </Link>
          </li>

          <li>
            <Link to="/sjukdomar" onClick={() => setToggled(!toggled)}>
              Sjukdomar
            </Link>
          </li>
        </>
      );
    } else if (dropDownText === PageName.Adoption.toLowerCase()) {
      setDropDownLinks(
        <>
          <li>
            <Link
              to="/adoption"
              onClick={() => {
                setToggled(!toggled);
              }}
            >
              Adoption via Bff Strays
            </Link>
          </li>
          <li>
            <Link
              to="/krav-pa-adoptorer"
              onClick={() => {
                setToggled(!toggled);
              }}
            >
              Krav på adoptörer
            </Link>
          </li>
        </>
      );
    } else {
      setDropDownLinks(<></>);
    }
  };

  return (
    <Nav style={{ zIndex: 999 }}>
      <Logo
        onClick={() => {
          navigate("/");
        }}
      >
        <img src="" alt="Bff Strays logo" />
      </Logo>
      <Menu
        onClick={() => {
          setToggled(!toggled);
          setDropDownToShow("");
          setDropDownLinks(<></>);
        }}
      >
        <HamMenu>
          <HamStick toggled={+toggled} />
        </HamMenu>
      </Menu>
      <DropDownMenu toggled={+toggled}>
        <ul>
          <li>
            <Link
              to="/"
              onClick={() => {
                setToggled(!toggled);
              }}
            >
              Hem
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
            Hundarna{" "}
            {dropDownToShow !== PageName.Dogs.toLowerCase() ? (
              <KeyboardArrowDownRoundedIcon />
            ) : (
              <KeyboardArrowUpRoundedIcon />
            )}
          </li>
          {dropDownToShow === PageName.Dogs.toLowerCase()
            ? dropDownLinks
            : null}
          <li>
            <Link to="/om-oss" onClick={() => setToggled(!toggled)}>
              Om oss
            </Link>
          </li>
          {/* <li>
            <Link to="/adoption" onClick={() => setToggled(!toggled)}>
              Adoption via Bff Strays
            </Link>
          </li> */}
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
            Adoption via Bff Strays
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
            Situationen i Spanien
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
              Donera
            </Link>
          </li>
          <li>
            <Link to="/intresseanmalan" onClick={() => setToggled(!toggled)}>
              Intresseanmälan
            </Link>
          </li>
          <li>
            <Link
              to="/kontakt"
              onClick={() => {
                setToggled(!toggled);
              }}
            >
              Kontakt
            </Link>
          </li>
        </ul>
      </DropDownMenu>
    </Nav>
  );
};
