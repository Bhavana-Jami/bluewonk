import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import { Search, MessageCircle, Bell } from "lucide-react";
// import { Button } from '@/components/ui/button'
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Link } from "react-router-dom";

export default function Header() {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Tech", path: "/tech" },
    { name: "Love", path: "/love" },
    { name: "Spiritual", path: "/spiritual" },
    { name: "Travel", path: "/travel" },
  ];
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent" elevation={0}>
        <Tabs
          value={value}
          onChange={handleChange}
          centered
          sx={{
            "& .MuiTab-root": {
              textTransform: "none",
              fontSize: "1rem",
              minWidth: 100,
            },
          }}
        >
          {navLinks.map((link, key) => (
            <Link to={link.path}>
              {" "}
              <Tab label={link.name} key={key}></Tab>
            </Link>
          ))}
          {/* <Tab label="Notes" />
          <Tab label="Archive" />
          <Tab label="About" /> */}
        </Tabs>
      </AppBar>
    </Box>
  );
}
