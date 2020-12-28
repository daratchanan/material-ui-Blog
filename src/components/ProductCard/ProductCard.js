import React from 'react';
import { Avatar, Box, Grid, makeStyles, Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';

const useStyles = makeStyles((theme) => ({
   card: {
      maxWidth: "100%",
   },
   media: {
      height: 240
   },
   cardActions: {
      display: "flex",
      margin: "0 10px",
      justifyContent: "space-between"
   },
   author: {
      display: "flex"
   },
   paginationContainer: {
      display: "flex",
      justifyContent: "center"
   },
}));

function ProductCard({ imgUrl, title, dateTime, detail, avatar, name }) {
   const classes = useStyles();

   return (

      <Grid item xs={12} sm={6} md={4}>
         <Card className={classes.card}>
            <CardActionArea>
               <CardMedia
                  className={classes.media}
                  image={imgUrl}
                  title="Contemplative Reptile"
               />
               <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                     {title}
                           </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                     {detail}
                           </Typography>
               </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardActions}>
               <Box className={classes.author}>
                  <Avatar src={avatar}>
                  </Avatar>
                  <Box ml={2}>
                     <Typography variant="subtitle2" component="p">
                        {name}
                              </Typography>
                     <Typography variant="subtitle2" color="textSecondary" component="p">
                        {dateTime}
                              </Typography>
                  </Box>
               </Box>
               <Box>
                  <BookmarkBorderIcon />
               </Box>
            </CardActions>
         </Card>
      </Grid>

   )
}

export default ProductCard;
