import { Container } from "@mui/material";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
//import homebanner from "../assets/hero-bg.png";

function Header() {
  return (
    <AppBar
      position="static"
      sx={{
        background: "#004439",

        color: "#ffffff",
        py: 2,
        textAlign: "start",
        boxShadow: "none",
        px: 0,
        p: 0,
      }}
    >
      <Container>
        <Toolbar
          sx={{
            justifyContent: "space-between",
            p: 0,
            px: 0,
            color: "#40473d",
          }}
        >
          {/* Logo / Title */}
          <Link to="/" className="logo">
            <Typography sx={{ flexGrow: 1 }}>
              <Typography
                component="span"
                variant="h5"
                fontWeight="bold"
                sx={{ textDecoration: "none", color: "#fff" }}
              >
                React
              </Typography>
              <Typography
                component="span"
                variant="h5"
                fontWeight="bold"
                sx={{ ml: 1, textDecoration: "none", color: "#fff" }}
              >
                Ecommerce
              </Typography>
            </Typography>
          </Link>

          {/* Menu Buttons */}
          <Box className="navlinks">
            <Button sx={{ color: "#fff" }} variant="text">
              <Link to="/">Home</Link>
            </Button>
            <Button sx={{ color: "#fff" }} variant="text">
              <Link to="/about">About</Link>
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
