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
  CircularProgress
} from "@mui/material";
import Rating from '@mui/material/Rating';


function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

useEffect(() => {
    fetch("https://fakestoreapi.com/products")
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
      {/* HERO SECTION */}
      <Box
      sx={{
          background: "rgb(250, 250, 250)",
          color: "#111827",
          py: 16,
          textAlign: "start"
        }}
      >
        <Container>
      
        
        <Typography variant="h3" fontWeight="bold" >
          Welcome to MyStore
        </Typography>
        <Typography variant="h6" sx={{ mt: 0, textTransform: 'capitalize' }}>
          Best products at best prices
        </Typography>
        <Button variant="contained" sx={{ mt: 3, px: 8, py: 1, background : "#111827", color: "#fff" }}>
          Shop Now
        </Button>
        </Container>
      </Box>
      

      {/* PRODUCT SECTION */}
      <Container sx={{ py: 2 }}>
        <Typography variant="h4" gutterBottom sx={{mt: 3, mb: 5, textAlign: "center"}}>
          Featured Products
        </Typography>

        
        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap"  }}>
          {products.map((product) => (
            <Box sx={{ color: "#000", textAlign: "center", flex: "0 0 23%", cursor: 'pointer' }} key={product.id}
    onClick={() => navigate(`/product/${product.id}`)}>
              <CardMedia
                sx={{width: "75%", mx: "auto",
                    height: 200,
                    objectFit: "contain", // or "cover"
                    padding: 2,
                    backgroundColor: "#f5f5f5"
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
                    }}
                  >
                    {shortText(product.title, 100)}
                  </Typography>
                  <Typography
                    variant="body1"
                    
                  >
                    {product.price}
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