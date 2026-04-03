import React, { useEffect, useState } from "react";
import {
  Container,
  Grid,
  Typography,
  Button,
  CardMedia,
  Box,
  Rating,
} from "@mui/material";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function ProductDetail() {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/products/${id}`)
      .then((res) => setProduct(res.data));
  }, [id]);

  if (!product) return <Typography>Loading...</Typography>;

  return (
    <Container sx={{ mt: 5 }}>
      <Grid container spacing={4}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid size={5}>
              <Box
                sx={{
                  background: "#f5f5f5",
                  borderRadius: 2,
                  textAlign: "center",
                }}
              >
                <CardMedia
                  component="img"
                  image={product.images}
                  alt={product.title}
                  sx={{
                    height: 400,
                    width: "100%",
                    objectFit: "contain",
                  }}
                />
              </Box>
            </Grid>
            <Grid size={7}>
              <Typography variant="h4" gutterBottom fontWeight="bold">
                {product.title}
              </Typography>

              <Typography variant="h5" sx={{ my: 2, color: "#004439" }}>
                ${product.price}
              </Typography>

              <Typography variant="body1" sx={{ mb: 3 }}>
                {product.description}
              </Typography>

              <Button
                onClick={() => {
                  addToCart(product);
                  navigate("/cart"); // redirect
                }}
                variant="contained"
                startIcon={<ShoppingCartIcon />}
                sx={{
                  borderRadius: 20,
                  px: 3,
                  py: 1,
                  background: "#d5d52c",
                  color: "#004439",
                  fontWeight: "600",
                }}
              >
                Add to Cart
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Container>
  );
}

export default ProductDetail;
