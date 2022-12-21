import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Image from "next/image";
import Link from "next/link";

export default function PositionedMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className=" w-[100px]">
      <Button
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        position="sticky"
      >
        <Image
          className=" object-cover "
          src={require(`../../layout/images/menu.png`)}
          alt=""
        />
      </Button>
      <Menu
        className="p-[50px]"
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem onClick={handleClose}>
          <Link href="/home">HOME</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href="/movies">MOVIES</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href="/about">ABOUT</Link>
        </MenuItem>
      </Menu>
    </div>
  );
}
