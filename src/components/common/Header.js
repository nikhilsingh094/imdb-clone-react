import { useState } from "react";


import {
  AppBar,
  Toolbar,
  styled,
  Box,
  Typography,
  InputBase,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { BookmarkAdd, ExpandMore } from "@mui/icons-material";
import { logoURL } from "../../constants/constant";
import React from "react";
import HeaderMenu from "./HeaderMenu";
import { useNavigate } from "react-router-dom";
import { routePath } from "../../route/route";

const StyleToolbar = styled(Toolbar)`
  background: #121212;
  min-height: 56px !important;
  padding: 0 155px !important;
  justify-content: space-between;

  & > * {
    padding: 0 8px;
  }

  & > div {
    display: flex;
    align-items: center;
    cursor: pointer;

    & > p {
      font-size: 14px;
      font-weight: 600;
    }
  }
  & > p {
    font-size: 14px;
    font-weight: 600;
  }
`;

const InputSearchField = styled(InputBase)`
  background: #ffffff;
  height: 30px;
  width: 55%;
  border-radius: 5px;
`;

const Logo = styled("img")({
  width: 64,
});

const Header = () => {
  const [open, setOpen] = useState(null);
  const navigate = useNavigate()

  const handleClick = (e) => {
    setOpen(e.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  return (
    <AppBar position="static">
      <StyleToolbar>
        <Logo src={logoURL} alt="logo" onClick={()=> navigate(routePath.home)} />
        <Box onClick={handleClick}>
          <MenuIcon />
          <Typography>Menu</Typography>
        </Box>
        <HeaderMenu open={open} handleClose={handleClose} />
        <InputSearchField />
        <Typography>
          IMDB<Box component="span">Pro</Box>
        </Typography>
        <Box>
          <BookmarkAdd />
          <Typography>Watchlist</Typography>
        </Box>
        <Typography>Sign In</Typography>
        <Box>
          <Typography>EN</Typography>
          <ExpandMore />
        </Box>
      </StyleToolbar>
    </AppBar>
  );
};

export default Header;
