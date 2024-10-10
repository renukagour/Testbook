/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from "react";
import AddressCard from "../AdderssCard/AddressCard";
import OrderTracker from "./OrderTracker";
import { Box, Grid } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
;import StarBorderIcon from '@mui/icons-material/StarBorder';
const OrderDetails = () => {
  return (
    <div className="px-5 lg:px-20">
      <div>
        <h1 className="font-bold text-xl py-7">Delivery Address</h1>
        <AddressCard />
      </div>
      <div className="py-20">
        <OrderTracker activeStep={3} />
      </div>

      {/* listing orders */}
      <Grid container className="space-y-5">

        {[1, 2, 3, 4].map((item)=> <Grid
          item
          container
          className="shadow-xl rounded-md p-5 border"
          sx={{ alignItems: "center", justifyContent: "space-between" }}
        >
          <Grid item xs={6}>
            <div className="flex items-center space-x-4">
              <img
                className="w-[5rem] h-[5rem] object-cover object-top"
                src="https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/l/f/r/xl-k-spl668-yellow-sg-leman-original-imagznqcrahgq9rf.jpeg?q=70"
                alt=""
              />

              <div className="space-y-2 ml-5 ">
                <p className="font-semibold ">
                  Men Embroidered Jacquard Straight Kurta
                </p>
                <p className="space-x-5 opacity-50 text-xs font-semibold">
                  <span>Size: M</span> <span>Color :White</span>
                </p>
                <p className="opacity-70">Seller :SG LEMAN</p>
                <p>₹1999</p>
              </div>
            </div>
          </Grid>

          <Grid item >
           <Box sx={{ color:deepPurple[500] }}>
            <StarBorderIcon sx={{fontSize:"2rem"}} className="px-2" />
            <span>Rate & Review Products</span>
           </Box>
          </Grid>
        </Grid>)}
       
      </Grid>
    </div>
  );
};

export default OrderDetails;
