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




function ProductDetail() {

  const { addToCart } = useContext(CartContext);
const navigate = useNavigate();

  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => setProduct(res.data));
  }, [id]);

  if (!product) return <Typography>Loading...</Typography>;

  return (
    <Container sx={{ mt: 5 }}>
      <Grid container spacing={4}>
        
        {/* LEFT: IMAGE */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              background: "#f5f5f5",
              p: 3,
              borderRadius: 2,
              textAlign: "center",
            }}
          >
            <CardMedia
              component="img"
              image={product.image}
              alt={product.title}
              sx={{
                height: 400,
                objectFit: "contain",
              }}
            />
          </Box>
        </Grid>

        {/* RIGHT: DETAILS */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom>
            {product.title}
          </Typography>

          <Rating
            value={product.rating?.rate || 0}
            precision={0.5}
            readOnly
          />

          <Typography
            variant="h5"
            color="primary"
            sx={{ my: 2 }}
          >
            ${product.price}
          </Typography>

          <Typography variant="body1" sx={{ mb: 3 }}>
            {product.description}
          </Typography>

          <Button
          variant="contained"
          size="large"
          fullWidth
          onClick={() => {
            addToCart(product);
            navigate("/cart"); // redirect
          }}
        >
          Add to Cart
        </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ProductDetail;