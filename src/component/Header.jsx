import { Container } from "@mui/material";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import homebanner from "../assets/hero-bg.png";

function Header() {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundImage: `url(${homebanner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "#ffffff",
        py: 16,
        textAlign: "start",
        boxShadow: "none",
        px: 0,
        p: 0,
      }}
    >
      <Container>
        <Toolbar
          sx={{ justifyContent: "space-between", p: 0, px: 0, color: "#fff" }}
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
        <Box sx={{ py: 9, pb: 14 }}>
          <Container>
            <Box>
              <Typography variant="h2" fontWeight="bold">
                Smart products. <br />
                Better living.
              </Typography>
              <Typography
                variant="h6"
                sx={{ mt: 0, textTransform: "capitalize" }}
              >
                Best products at best prices
              </Typography>
              <Button
                variant="contained"
                sx={{
                  borderRadius: 20,
                  mt: 3,
                  px: 3,
                  py: 1,
                  background: "#d5d52c",
                  color: "#004439",
                  fontWeight: "600",
                }}
              >
                Shop Now
              </Button>
            </Box>
          </Container>
        </Box>
      </Container>
    </AppBar>
  );
}

export default Header;
