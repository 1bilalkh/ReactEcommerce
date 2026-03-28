import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
} from "@mui/material";
import Paper from '@mui/material/Paper';
import { List, ListItem, ListItemText } from "@mui/material";

// import FacebookIcon from "@mui/icons-material/Facebook";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import TwitterIcon from "@mui/icons-material/Twitter";






function Footer() {
  return (
      <>

          <Box sx={{ flexGrow: 1, py: 5, background: "#212121", color: '#fff', mt: 5 }}>
            <Grid container spacing={2} maxWidth="lg" sx={{mx:"auto"}}>
              <Grid size={6}>
                <Box sx={{display: 'flex'}}>
                    <Grid size={3}>
                      <Typography variant="body1" sx={{mb: 2}} fontWeight="bold">About</Typography>
                        
                      </Grid>
                    <Grid size={3}>
                      <Typography variant="body1" sx={{mb: 2}} fontWeight="bold">About</Typography>
                        
                      </Grid>
                    <Grid size={3}>
                      <Typography variant="body1" sx={{mb: 2}} fontWeight="bold">About</Typography>
                       
                      </Grid>
                    <Grid size={3}>
                      <Typography variant="body1" sx={{mb: 2}} fontWeight="bold">About</Typography>
                        
                      </Grid>
                </Box>
              </Grid>
              <Grid size={6}>
                <Box sx={{display: 'flex'}}>
                  <Grid size={6}>
                      <Typography variant="body1" sx={{mb: 2}} fontWeight="bold">About</Typography>
                        
                      </Grid>
                  <Grid size={6}>
                      <Typography variant="body1" sx={{mb: 2}} fontWeight="bold">About</Typography>
                        
                      </Grid>
                </Box>
              </Grid>
            </Grid>
        </Box> 
      </>
  );
}

export default Footer;