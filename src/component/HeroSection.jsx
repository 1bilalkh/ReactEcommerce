import { Box } from "@mui/material";
import homebanner from "../assets/hero-bg.png";
import { Typography } from "@mui/material";
import { Container } from "@mui/material";

function Hero({ title, subtitle }) {
  return (
    <>
      <Box
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
        }}
      >
        <Container sx={{ mx: "auto" }}>
          <Typography
            variant="h2"
            gutterBottom
            fontWeight="bold"
            sx={{ pb: 0, mb: 0 }}
          >
            {title}
          </Typography>
          <Typography variant="h6" gutterBottom fontWeight="bold">
            {subtitle}
          </Typography>
        </Container>
      </Box>
    </>
  );
}

export default Hero;
