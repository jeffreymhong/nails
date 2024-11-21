import { useState } from "react";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

export default function Nav(props) {
  const [clicked, setClicked] = useState(false);
  // customize Menu (Hamburger Icon) Appearance
  const customIconStyle = {
    color: "#ed7e90",
    fontSize: "4rem",
  };
  // customize text appearance for buttons that appear after clicking Menu Icon
  const customTextStyle = { ...customIconStyle, fontSize: "2rem" };
  return (
    <nav>
      <IconButton
        onClick={() => {
          setClicked((previous) => !previous);
          props.setMenu((previous) => !previous);
        }}
        aria-label="dropdown"
        id="menu-close"
        className={!clicked ? "show" : null}
      >
        <MenuIcon sx={customIconStyle} />
      </IconButton>

      <div id="pages" className={clicked ? "show" : null}>
        <IconButton
          onClick={() => {
            setClicked((previous) => !previous);
            props.setMenu((previous) => !previous);
          }}
          aria-label="dropdown"
          id="menu-open"
        >
          <MenuOpenIcon sx={customIconStyle} />
        </IconButton>
        <Button
          onClick={() => {
            window.location.href = "/";
          }}
          variant="text"
          sx={customTextStyle}
        >
          Home
        </Button>
        <Button
          onClick={() => {
            window.location.href = "/service";
          }}
          variant="text"
          sx={customTextStyle}
        >
          Services
        </Button>
        <Button
          onClick={() => {
            window.location.href = "/reservation";
          }}
          variant="text"
          sx={customTextStyle}
        >
          Reservations
        </Button>
        <Button
          onClick={() => {
            window.location.href = "/about";
          }}
          variant="text"
          sx={customTextStyle}
        >
          About
        </Button>
        <Button
          onClick={() => {
            window.location.href = "/contact";
          }}
          variant="text"
          sx={customTextStyle}
        >
          Contact
        </Button>
        <img src="/assets/hand.webp" alt="graphic of hand holding nail brush" />
      </div>
    </nav>
  );
}
