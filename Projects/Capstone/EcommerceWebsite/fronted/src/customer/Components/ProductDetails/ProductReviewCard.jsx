/* eslint-disable no-unused-vars */
import { Avatar, Box, Grid, Rating } from "@mui/material";
import React from "react";

const ProductReviewCard = () => {
  return (
    <>
      <Grid container spacing={2} gap={3}>
        <Grid item xs={1}>
          <Box>
            <Avatar
              className="text-white"
              sx={{ bgcolor: "#1976d2", height: 50, width: 50 }}
            >
              R
            </Avatar>
          </Box>
        </Grid>
        <Grid item xs={9}>
          <div className="space-y-2">
            <div>
              <p className="font-semibold text-lg"> Renuka</p>
              <p className="text-sm opacity-70">April 5, 2023</p>
            </div>
          </div>
          {/* half-rating */}
          <Rating name="half-rating-read" value={4.5} readOnly precision={0.5} />
          <p>
          nice product, love this search
          </p>
        </Grid>
      </Grid>
    </>
  );
};

export default ProductReviewCard;
