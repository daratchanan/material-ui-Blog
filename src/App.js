import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Box, Container } from '@material-ui/core';

import Pagination from '@material-ui/lab/Pagination';
import ProductItem from './components/ProductItem/ProductItem';

const useStyles = makeStyles((theme) => ({
   appBar: {
      backgroundColor: "#fff"
   },
   hero: {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1491002052546-bf38f186af56?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8d2ludGVyfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60")`,
      height: "500px",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "#fff",
      fontSize: "4rem",
      [theme.breakpoints.down("sm")]: {
         height: 300,
         fontSize: "3em"
      }
   },
   blogsContainer: {
      paddingTop: theme.spacing(3)
   },
   blogTitle: {
      fontWeight: 800,
      paddingBottom: theme.spacing(3)
   },
   paginationContainer: {
      display: "flex",
      justifyContent: "center"
   },
}));

function App() {
   const classes = useStyles();

   return (
      <div className="App">
         <AppBar className={classes.appBar} position="static">
            <Toolbar>
               <Typography variant="h6" color="primary">
                  Blog
          </Typography>
            </Toolbar>
         </AppBar>
         <Box className={classes.hero}>
            <Box>React Blog</Box>
         </Box>
         <Container maxWidth="lg" className={classes.blogsContainer}>
            <Typography variant="h4" className={classes.blogTitle}>
               Articles
        </Typography>
            <ProductItem />
            <Box mu={4} className={classes.paginationContainer}>
               <Pagination count={10}/>
            </Box>
         </Container>
      </div>
   );
}

export default App;
