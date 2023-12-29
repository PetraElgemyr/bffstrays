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

export const Navbar = () => {
  const [toggled, setToggled] = useState(false);
  const [dropDownToShow, setDropDownToShow] = useState<string>("");
  const [dropDownLinks, setDropDownLinks] = useState<JSX.Element>(<></>);
  const navigate = useNavigate();
  const checkDropDownToShow = (dropDownText: string) => {
    if (dropDownText === "hundarna") {
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
    } else if (dropDownText === "spanien") {
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
              if (dropDownToShow === "hundarna") {
                setDropDownToShow("");
              } else {
                setDropDownToShow("hundarna");
                checkDropDownToShow("hundarna");
              }
            }}
          >
            Hundarna{" "}
            {dropDownToShow !== "hundarna" ? (
              <KeyboardArrowDownRoundedIcon />
            ) : (
              <KeyboardArrowUpRoundedIcon />
            )}
          </li>
          {dropDownToShow === "hundarna" ? dropDownLinks : null}
          <li>
            <Link to="/om-oss" onClick={() => setToggled(!toggled)}>
              Om oss
            </Link>
          </li>
          <li
            onClick={() => {
              if (dropDownToShow === "spanien") {
                setDropDownToShow("");
              } else {
                setDropDownToShow("spanien");
                checkDropDownToShow("spanien");
              }
            }}
          >
            Situationen i Spanien
            {dropDownToShow !== "spanien" ? (
              <KeyboardArrowDownRoundedIcon />
            ) : (
              <KeyboardArrowUpRoundedIcon />
            )}
          </li>
          {dropDownToShow === "spanien" ? dropDownLinks : null}

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
