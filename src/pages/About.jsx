import React from "react";
import {
  Container,
  Typography,
  Grid,
  Box,
  Card,
  CardContent,
} from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

function About() {
  return (
    <>
      <Container sx={{ mt: 5 }}>
        <Box
          sx={{
            width: "100%",
            mx: "auto", // centers horizontally
          }}
        >
          <Typography
            variant="h4"
            gutterBottom
            fontWeight="bold"
            sx={{ py: 3 }}
          >
            Who We Are
          </Typography>

          <Grid container>
            <Box
              sx={{
                gap: 3,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Grid item xs={8}>
                <Box
                  component="img"
                  src="https://picsum.photos/500/300"
                  alt="about"
                  sx={{ width: "100%", borderRadius: "10px" }}
                />
              </Grid>
              <Grid item xs={4}>
                <Typography color="text.secondary" paragraph>
                  We are a passionate e-commerce platform dedicated to
                  delivering the best products at affordable prices. Our goal is
                  to make online shopping simple, fast, and reliable.
                </Typography>
                <Typography color="text.secondary">
                  From electronics to fashion, we bring you a wide range of
                  high-quality items carefully selected to meet your needs.
                </Typography>
              </Grid>
            </Box>
          </Grid>
        </Box>

        <Box sx={{ flexGrow: 1, mt: 5 }}>
          <Typography
            variant="h4"
            gutterBottom
            fontWeight="bold"
            sx={{ py: 3 }}
          >
            Our Promise
          </Typography>
          <Grid container spacing={2}>
            <Grid size={4}>
              <Card sx={{ textAlign: "center", p: 1, backgroundColor: "#fff" }}>
                <CardContent>
                  <VerifiedIcon sx={{ fontSize: 60, color: "#004439" }} />
                  <Typography variant="h6">Quality Products</Typography>
                  <Typography color="text.secondary">
                    We ensure top-notch quality for every product.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid size={4}>
              <Card sx={{ textAlign: "center", p: 1 }}>
                <CardContent>
                  <LocalShippingIcon sx={{ fontSize: 60, color: "#004439" }} />
                  <Typography variant="h6">Fast Delivery</Typography>
                  <Typography color="text.secondary">
                    Quick and reliable delivery at your doorstep.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid size={4}>
              <Card sx={{ textAlign: "center", p: 1 }}>
                <CardContent>
                  <SupportAgentIcon sx={{ fontSize: 60, color: "#004439" }} />
                  <Typography variant="h6">24/7 Support</Typography>
                  <Typography color="text.secondary">
                    Our team is always ready to help you anytime.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}

export default About;
