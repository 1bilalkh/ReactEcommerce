import { CssBaseline, Container } from "@mui/material";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";

function Header() {
  return (
    <AppBar position="static"
      sx={{
        background: "none",
        boxShadow: "none",
         color: "#333",
         py:1
        }}
        >
        <Container>
        
      <Toolbar sx={{justifyContent: 'space-between'}}>
        {/* Logo / Title */}
        <Link to="/">
          <Typography  sx={{ flexGrow: 1 }}>
            <Typography component="span" variant="h5" fontWeight="bold" sx={{ textDecoration: "none", color: "#000" }}>
              React
            </Typography>
            <Typography component="span" variant="h5" fontWeight="bold" sx={{ml:1, textDecoration: "none", color: "#000"}}>
            Ecommerce
          </Typography>
          </Typography>
        </Link>

        {/* Menu Buttons */}
        <Box>
          <Button color="inherit" variant="text"><Link to="/">Home</Link></Button>
          <Button color="inherit" variant="text"><Link to="/about">About</Link></Button>
        </Box>
      </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;