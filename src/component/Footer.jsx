import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";
import { List, ListItemButton, ListItemText } from "@mui/material";

// import FacebookIcon from "@mui/icons-material/Facebook";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import TwitterIcon from "@mui/icons-material/Twitter";

function Footer() {
  const navigate = useNavigate();
  return (
    <>
      <Box
        className="footer"
        sx={{ flexGrow: 1, py: 5, background: "#212121", color: "#fff", mt: 5 }}
      >
        <Grid
          container
          spacing={2}
          maxWidth="lg"
          sx={{ mx: "auto", color: "#ffffff" }}
        >
          <Grid size={6}>
            <Box sx={{ display: "flex" }}>
              <Grid size={3}>
                <Typography
                  variant="body2"
                  sx={{ mb: 2, color: "#b4b0b0", textTransform: "uppercase" }}
                  fontWeight="400"
                >
                  About
                </Typography>
                <List sx={{ p: 0, m: 0 }} className="footerlist">
                  <ListItemButton component={Link} to="/" sx={{ p: 0, m: 0 }}>
                    <ListItemText primary="Contact Us" />
                  </ListItemButton>

                  <ListItemButton
                    component={Link}
                    to="/about"
                    sx={{ p: 0, m: 0 }}
                  >
                    <ListItemText primary="About Us" />
                  </ListItemButton>
                  <ListItemButton
                    component={Link}
                    to="/careers"
                    sx={{ p: 0, m: 0 }}
                  >
                    <ListItemText primary="Careers" />
                  </ListItemButton>
                  <ListItemButton
                    component={Link}
                    to="/stories"
                    sx={{ p: 0, m: 0 }}
                  >
                    <ListItemText primary="Stories" />
                  </ListItemButton>
                  <ListItemButton
                    component={Link}
                    to="/Press"
                    sx={{ p: 0, m: 0 }}
                  >
                    <ListItemText primary="Press" />
                  </ListItemButton>
                  <ListItemButton
                    component={Link}
                    to="/CorporateInformation"
                    sx={{ p: 0, m: 0 }}
                  >
                    <ListItemText primary="Corporate Information" />
                  </ListItemButton>
                </List>
              </Grid>
              <Grid size={3}>
                <Typography
                  variant="body2"
                  sx={{ mb: 2, color: "#b4b0b0", textTransform: "uppercase" }}
                  fontWeight="400"
                >
                  Group
                </Typography>
                <List sx={{ p: 0, m: 0 }} className="footerlist">
                  <ListItemButton component={Link} to="/" sx={{ p: 0, m: 0 }}>
                    <ListItemText primary="Contact Us" />
                  </ListItemButton>

                  <ListItemButton
                    component={Link}
                    to="/about"
                    sx={{ p: 0, m: 0 }}
                  >
                    <ListItemText primary="About Us" />
                  </ListItemButton>
                  <ListItemButton
                    component={Link}
                    to="/careers"
                    sx={{ p: 0, m: 0 }}
                  >
                    <ListItemText primary="Careers" />
                  </ListItemButton>
                </List>
              </Grid>
              <Grid size={3}>
                <Typography
                  variant="body2"
                  sx={{ mb: 2, color: "#b4b0b0", textTransform: "uppercase" }}
                  fontWeight="400"
                >
                  Help
                </Typography>
                <List sx={{ p: 0, m: 0 }} className="footerlist">
                  <ListItemButton component={Link} to="/" sx={{ p: 0, m: 0 }}>
                    <ListItemText primary="Contact Us" />
                  </ListItemButton>

                  <ListItemButton
                    component={Link}
                    to="/about"
                    sx={{ p: 0, m: 0 }}
                  >
                    <ListItemText primary="About Us" />
                  </ListItemButton>
                  <ListItemButton
                    component={Link}
                    to="/careers"
                    sx={{ p: 0, m: 0 }}
                  >
                    <ListItemText primary="Careers" />
                  </ListItemButton>
                  <ListItemButton
                    component={Link}
                    to="/stories"
                    sx={{ p: 0, m: 0 }}
                  >
                    <ListItemText primary="Stories" />
                  </ListItemButton>
                </List>
              </Grid>
              <Grid size={3}>
                <Typography
                  variant="body2"
                  sx={{ mb: 2, color: "#b4b0b0", textTransform: "uppercase" }}
                  fontWeight="400"
                >
                  Policy
                </Typography>
                <List sx={{ p: 0, m: 0 }} className="footerlist">
                  <ListItemButton component={Link} to="/" sx={{ p: 0, m: 0 }}>
                    <ListItemText primary="Contact Us" />
                  </ListItemButton>

                  <ListItemButton
                    component={Link}
                    to="/about"
                    sx={{ p: 0, m: 0 }}
                  >
                    <ListItemText primary="About Us" />
                  </ListItemButton>
                  <ListItemButton
                    component={Link}
                    to="/careers"
                    sx={{ p: 0, m: 0 }}
                  >
                    <ListItemText primary="Careers" />
                  </ListItemButton>
                  <ListItemButton
                    component={Link}
                    to="/stories"
                    sx={{ p: 0, m: 0 }}
                  >
                    <ListItemText primary="Stories" />
                  </ListItemButton>
                  <ListItemButton
                    component={Link}
                    to="/Press"
                    sx={{ p: 0, m: 0 }}
                  >
                    <ListItemText primary="Press" />
                  </ListItemButton>
                  <ListItemButton
                    component={Link}
                    to="/CorporateInformation"
                    sx={{ p: 0, m: 0 }}
                  >
                    <ListItemText primary="Corporate Information" />
                  </ListItemButton>
                  <ListItemButton
                    component={Link}
                    to="/careers"
                    sx={{ p: 0, m: 0 }}
                  >
                    <ListItemText primary="Careers" />
                  </ListItemButton>
                </List>
              </Grid>
            </Box>
          </Grid>
          <Grid size={6}>
            <Box
              sx={{ display: "flex", pl: 3, borderLeft: "1px solid #4e4b4b" }}
            >
              <Grid size={6}>
                <Typography
                  variant="body2"
                  sx={{ mb: 2, color: "#b4b0b0", textTransform: "uppercase" }}
                  fontWeight="400"
                >
                  Email Us
                </Typography>
                <Typography variant="body2">My Company Pvt Ltd,</Typography>
                <Typography variant="body2">
                  Office 123, Business Center,
                </Typography>
                <Typography variant="body2">Main Shahrah-e-Faisal,</Typography>
                <Typography variant="body2">Karachi, 75000,</Typography>
                <Typography variant="body2">Sindh, Pakistan</Typography>
              </Grid>
              <Grid size={6}>
                <Typography
                  variant="body2"
                  sx={{ mb: 2, color: "#b4b0b0", textTransform: "uppercase" }}
                  fontWeight="400"
                >
                  Office Address
                </Typography>
                <Typography variant="body2">My Company Pvt Ltd,</Typography>
                <Typography variant="body2">
                  Office 123, Business Center,
                </Typography>
                <Typography variant="body2">Main Shahrah-e-Faisal,</Typography>
                <Typography variant="body2">Karachi, 75000,</Typography>
                <Typography variant="body2">Sindh, Pakistan</Typography>
                <Typography variant="body2">
                  CIN : U12345PK2023PTC000001
                </Typography>
                <Typography variant="body2">Telephone: </Typography>
                <Typography variant="body2">
                  <Link href="tel:+923001234567" sx={{ color: "#fff" }}>
                    +92 300 1234567
                  </Link>{" "}
                  /{" "}
                  <Link href="tel:+923001234568" sx={{ color: "#fff" }}>
                    +92 300 1234568
                  </Link>
                </Typography>
              </Grid>
            </Box>
          </Grid>
        </Grid>
        <Typography
          variant="body2"
          sx={{ mt: 2, pt: 6, color: "#b4b0b0", textAlign: "center" }}
        >
          Copyright © 2023 My Company Pvt Ltd. All rights reserved.
        </Typography>
      </Box>
    </>
  );
}

export default Footer;
