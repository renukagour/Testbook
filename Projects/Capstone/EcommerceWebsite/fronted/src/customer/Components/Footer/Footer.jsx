/* eslint-disable no-unused-vars */
import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-alice-carousel";

const Footer = () => {
  return (
    <>
      <Grid
        className="bg-black text-white text-center mt-10"
        container
        sx={{ bgcolor: "black", color: "white", py: 3 }}
      >
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" className="pb-5">
            Company
          </Typography>
          <div>
            <Button variant="h6" className="pb-5" >
              {" "}
              About Us{" "}
            </Button>
          </div>
          <div>
            <Button variant="h6" className="pb-5" >
              {" "}
              Blog{" "}
            </Button>
          </div>
          <div>
            <Button variant="h6" className="pb-5" >
              {" "}
              Press{" "}
            </Button>
          </div>
          <div>
            <Button variant="h6" className="pb-5" >
              {" "}
              Jobs{" "}
            </Button>
          </div>
          <div>
            <Button variant="h6" className="pb-5" >
              {" "}
              Partners{" "}
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" className="pb-5">
            Solutions
          </Typography>
          <div>
            <Button variant="h6" className="pb-5" >
              {" "}
              Marketing{" "}
            </Button>
          </div>
          <div>
            <Button variant="h6" className="pb-5" >
              Analysis{" "}
            </Button>
          </div>
          <div>
            <Button variant="h6" className="pb-5" >
              Commerce
            </Button>
          </div>
          <div>
            <Button variant="h6" className="pb-5" >
              {" "}
              Insights{" "}
            </Button>
          </div>
          <div>
            <Button variant="h6" className="pb-5" >
              {" "}
              Support{" "}
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" className="pb-5">
            Documentation
          </Typography>
          <div>
            <Button variant="h6" className="pb-5" >
              {" "}
              Guides{" "}
            </Button>
          </div>
          <div>
            <Button variant="h6" className="pb-5" >
              {" "}
              API Status{" "}
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" className="pb-5">
            Legal
          </Typography>
          <div>
            <Button variant="h6" className="pb-5" >
              {" "}
              Claims{" "}
            </Button>
          </div>
          <div>
            <Button variant="h6" className="pb-5" >
              {" "}
              Privacy{" "}
            </Button>
          </div>
          <div>
            <Button variant="h6" className="pb-5" >
              {" "}
              Terms
            </Button>
          </div>
        </Grid>

        <Grid className="pt-20" item xs={12}>
          <Typography variant="body2" align="center" component="p">
            Copyright © 2024. All rights reserved.
          </Typography>
          <Typography variant="body2" align="center" component="p">
            Made with ❤️ by Me
          </Typography>
          <Typography variant="body2" align="center" component="p">
            Icons Made by {" "}
            <Link
              href="https://www.flaticon.com/authors/freepik"
              color="inherit"
              underline="hover"
              title="Freepik"
            >
              Freepik
            </Link>{" "}
            from{" "}
            <Link
              href="https://www.flaticon.com/"
              title="Flaticon"
              color="inherit"
              underline="always"
            >
              www.flaticon.com
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Footer;
