import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Box,
  Button,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cart, setCart } = useContext(CartContext);

  const navigate = useNavigate();

  // Remove item
  const removeItem = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  // Total price
  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        Shopping Cart
      </Typography>

      {cart.length === 0 ? (
        <Typography>Your cart is empty</Typography>
      ) : (
        <>
          {cart.map((item) => (
            <Card
              key={item.id}
              sx={{
                display: "flex",
                mb: 2,
                p: 2,
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              {/* Product Image */}
              <CardMedia
                component="img"
                image={item.images}
                alt={item.title}
                sx={{ width: 100, height: 100, objectFit: "contain" }}
              />

              {/* Product Info */}
              <CardContent sx={{ flex: 1 }}>
                <Typography variant="h6">{item.title}</Typography>
                <Typography color="text.secondary">${item.price}</Typography>
              </CardContent>

              {/* Quantity (optional simple UI) */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Button variant="outlined">-</Button>
                <Typography>1</Typography>
                <Button variant="outlined">+</Button>
              </Box>

              {/* Remove Button */}
              <IconButton onClick={() => removeItem(item.id)} sx={{ ml: 1 }}>
                <DeleteIcon color="error" />
              </IconButton>
            </Card>
          ))}

          {/* Total Section */}
          <Box
            sx={{
              mt: 4,
              p: 3,
              border: "1px solid #ddd",
              borderRadius: "10px",
              textAlign: "right",
            }}
          >
            <Typography variant="h6">
              Total: ${totalPrice.toFixed(2)}
            </Typography>

            <Button
              onClick={() => navigate("/checkout")}
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
              Proceed to Checkout
            </Button>
          </Box>
        </>
      )}
    </Container>
  );
}

export default Cart;
