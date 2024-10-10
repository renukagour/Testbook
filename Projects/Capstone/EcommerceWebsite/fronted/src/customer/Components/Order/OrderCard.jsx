/* eslint-disable no-constant-binary-expression */

/* eslint-disable no-unused-vars */
import { Grid } from "@mui/material";
import React from "react";
import AdjustIcon from "@mui/icons-material/Adjust";
import { useNavigate } from "react-router-dom";

const OrderCard = () => {

  const navigate= useNavigate();
  return (
    <div onClick={()=>navigate(`/account/order/${5}`)} className="p-5 shadow-sm shadow-black border rounded-md hover:shadow-2xl"> 
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid item xs={6}>
          <div className="flex cursor-pointer">
            <img
              src="https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/l/f/r/xl-k-spl668-yellow-sg-leman-original-imagznqcrahgq9rf.jpeg?q=70"
              alt=""
              className="w-[5rem] h-[5rem] object-cover object-top"
            />
            <div className="ml-5 space-y-2">
              <p className="font-semibold">
                Men Embroidered Jacquard Straight Kurta
              </p>
              <p className="opacity-70 text-xs font-semibold">Size: M</p>
              <p className="opacity-70 text-xs font-semibold">Color : White</p>
            </div>
          </div>
        </Grid>

        <Grid item xs={2}>
          <p>₹1999</p>
        </Grid>
        <Grid item xs={4}>
          {true && (
            <div>
           
            <p>
                 <AdjustIcon sx={{width:"15px",height:"15px"}} className="text-sm text-green-600" />

              <span>Delivered on May 10, 2023</span>
              <span></span>
            </p>
            <p className="text-sm">
              Your Item has been delivered
            </p>
            </div>
          )}
          {false && (
            <p>
              <span>Expected Delivery on May 20, 2023</span>
            </p>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderCard;
