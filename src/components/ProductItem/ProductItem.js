import React from 'react'
import ProductCard from '../ProductCard/ProductCard';
import { Grid } from '@material-ui/core';

function productItem() {

   const data = [
      {
         imgUrl:"https://images.unsplash.com/photo-1512499758424-0816b36eff61?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fHglMjBtYXN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
         title:"React useState",
         detail:"Lizards are a widespread group of squamate reptiles, with over 6,000 species ranging across all continents except Antarctica",
         avatar:"https://images.unsplash.com/photo-1546820389-44d77e1f3b31?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTd8fGh1bWFufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
         name:"John Doe",
         dateTime:"May 14 2020"
      },
      {
         imgUrl:"https://images.unsplash.com/photo-1577095133648-9bba72beed44?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjV8fHglMjBtYXN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
         title:"React Hook",
         detail:"Lizards are a widespread group of squamate reptiles, with over 6,000 species ranging across all continents except Antarctica",
         avatar:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
         name:"Sara Doe",
         dateTime:"Jan 14 2020"
      },
      {
         imgUrl:"https://images.unsplash.com/photo-1575613420728-cc90c3f361dc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjh8fHglMjBtYXN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
         title:"React useContext",
         detail:"Lizards are a widespread group of squamate reptiles, with over 6,000 species ranging across all continents except Antarctica",
         avatar:"https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8cGVvcGxlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
         name:"Mark Doe",
         dateTime:"Feb 14 2020"
      },
   ]

   return (
      <Grid container spacing={3}>
         {data.map((data) => 
            <ProductCard
            imgUrl= {data.imgUrl}
            title={data.title}
            detail={data.detail}
            avatar={data.avatar}
            name={data.name}
            dateTime={data.dateTime}
            />
         )}
      </Grid>
   )
};

export default productItem;
