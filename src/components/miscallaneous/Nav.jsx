import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

export default function Nav(props) {
  const [clicked, setClicked] = useState(false);
  const customStyle = {
    color: "#ed7e90",
    fontSize: "4rem",
  };
  return (
    <nav>
      <IconButton
        onClick={() => {
          setClicked((previous) => !previous);
        }}
        aria-label="dropdown"
      >
        {clicked ? (
          <MenuOpenIcon sx={customStyle} />
        ) : (
          <MenuIcon sx={customStyle} />
        )}
      </IconButton>
      {clicked && (
        <div id="buttons">
          <button onClick={() => props.setPage("Home")}>Home</button>
          <button onClick={() => props.setPage("Service")}>Services</button>
          <button onClick={() => props.setPage("Reservation")}>
            Reservation Request
          </button>
          <button onClick={() => props.setPage("About")}>About Us</button>
        </div>
      )}
    </nav>
  );
}
