import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Typography,
  Grid,
  Button,
  Box,
  Card,
  CardMedia,
  CircularProgress,
} from "@mui/material";
import Rating from "@mui/material/Rating";
import Hero from "../component/HeroSection.jsx";

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=8")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Container sx={{ py: 5, textAlign: "center" }}>
        <CircularProgress />
      </Container>
    );
  }

  const shortText = (text, max = 80) => {
    return text.length > max ? text.substring(0, max) + "..." : text;
  };

  return (
    <>
      {/* <PageLayout title="Home | My Shop"></PageLayout> */}

      <Hero title="Smart Products." subtitle="Best Products at Best Prices" />

      <Container sx={{ py: 2 }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{ mt: 3, mb: 5, textAlign: "center" }}
        >
          Featured Products
        </Typography>

        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
          {products.map((product) => (
            <Box
              sx={{
                color: "#000",
                textAlign: "center",
                flex: "0 0 23%",
                cursor: "pointer",
              }}
              key={product.id}
              onClick={() => navigate(`/product/${product.id}`)}
            >
              <CardMedia
                sx={{
                  width: "100%",
                  mx: "auto",
                  height: 250,
                  objectFit: "contain", // or "cover"
                  padding: 0,
                  backgroundColor: "#f5f5f5",
                }}
                component="img"
                image={product.image}
                alt={product.title}
                
              />
              <Typography
                variant="body1"
                sx={{
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  py: 2,
                }}
              >
                {shortText(product.title, 20)}
              </Typography>
              <Typography variant="body1" sx={{ pb: 1 }}>
                Price:{" "}
                <Typography variant="span" fontWeight="bold">
                  ${product.price.toFixed(2)}
                </Typography>
              </Typography>
              <Rating
                
                value={product.rating?.rate || 0}
                precision={0.5}
                readOnly
              />
            </Box>
          ))}
        </Box>
      </Container>
    </>
  );
}

export default Home;
