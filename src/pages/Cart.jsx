import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Container, Typography, Card, CardContent } from "@mui/material";

function Cart() {
  const { cart } = useContext(CartContext);

  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        Cart Page
      </Typography>

      {cart.length === 0 ? (
        <Typography>Your cart is empty</Typography>
      ) : (
        cart.map((item, index) => (
          <Card key={index} sx={{ mb: 2 }}>
            <CardContent>
              <Typography>{item.title}</Typography>
              <Typography>${item.price}</Typography>
            </CardContent>
          </Card>
        ))
      )}
    </Container>
  );
}

export default Cart;