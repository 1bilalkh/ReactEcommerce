import React, { useContext } from "react";
import {
  Container,
  Typography,
  TextField,
  Grid,
  Button,
  Box,
  Card,
  CardContent,
} from "@mui/material";
import { CartContext } from "../context/CartContext";

function Checkout() {
  const { cart } = useContext(CartContext);

  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

  const handleOrder = () => {
    alert("Order Placed Successfully 🎉");
  };

  return (
    <Container sx={{ mt: 5 }}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={4}>
          <Grid
            size={8}
            sx={{ background: "#fff", padding: 3, borderRadius: 2 }}
          >
          
            <Typography variant="h6" gutterBottom sx={{ pb: 2 }}>
              Shipping Details
            </Typography>

            <Grid container spacing={1}>
              <Grid size={6}>
                <TextField fullWidth label="First Name" sx={{ mb: 1 }} />
              </Grid>
              <Grid size={6}>
                <TextField fullWidth label="Last Name" sx={{ mb: 1 }} />
              </Grid>
              <Grid size={6}>
                <TextField fullWidth label="Email" sx={{ mb: 1 }} />
              </Grid>
              <Grid size={6}>
                <TextField fullWidth label="Phone" sx={{ mb: 1 }} />
              </Grid>
              <Grid size={4}>
                <TextField fullWidth label="City" sx={{ mb: 1 }} />
              </Grid>
              <Grid size={4}>
                <TextField fullWidth label="State" sx={{ mb: 1 }} />
              </Grid>
              <Grid size={4}>
                <TextField fullWidth label="ZipCode" sx={{ mb: 1 }} />
              </Grid>
              <Grid size={12}>
                <TextField
                  label="Message"
                  multiline
                  rows={4}
                  variant="outlined"
                  fullWidth
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid size={4}>
           
              <CardContent>
                <Typography variant="h6">Order Summary</Typography>

                {cart.map((item) => (
                  <Box
                    key={item.id}
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      my: 1,
                    }}
                  >
                    <Typography>{item.title}</Typography>
                    <Typography>${item.price}</Typography>
                  </Box>
                ))}

                <Box sx={{ borderTop: "1px solid #ddd", mt: 2, pt: 2 }}>
                  <Typography variant="h6">
                    Total: ${totalPrice.toFixed(2)}
                  </Typography>
                </Box>

                <Button
                  fullWidth
                  variant="contained"
                  sx={{
                    mt: 3,
                    background: "#d5d52c",
                    color: "#004439",
                    fontWeight: "600",
                    borderRadius: 5,
                  }}
                  onClick={handleOrder}
                >
                  Place Order
                </Button>
              </CardContent>
            
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Checkout;
