/* eslint-disable react-hooks/exhaustive-deps */

/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import AddressCard from "../AdderssCard/AddressCard";
import { Button } from "@mui/material";
import CartItem from '../Cart/CartItem';
import { useDispatch, useSelector } from "react-redux";
import { getOrderById } from "../../../State/Order/Action";
import { useLocation } from "react-router-dom";

import { createPayment } from "../../../State/Payment/Action";


const OrderSummary = () => {
  const dispatch = useDispatch();
  // const navigate=useNavigate();
  const { order } = useSelector(store => store);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const orderId = searchParams.get("order_id");
  // console.log("orderd : " + orderId);
  useEffect(() => {
    dispatch(getOrderById(orderId));
  }, [orderId]);

  const handleCheckOut=()=>{
    dispatch(createPayment(orderId))
  }

  return (
    <div>
      <div className="p-5 shadow-lg rounded-s-md border">
        <AddressCard address={order.order?.shippingAddress} />
       {/* { console.log("order shipping address: " + JSON.stringify(order.order?.shippingAddress))} */}
      </div>

      <div className="lg:grid grid-cols-3  relative mt-10">
        <div className="col-span-2">
        {/* {  console.log("orders are ",order.order?.orderItems)} */}
          {/* {order.order?.orderItems && order.order?.orderItems.map((items) => {
         <CartItem item={items}/>
          })} */}
           {order.order?.orderItems && order.order.orderItems.map((items) => (
        <CartItem key={items._id} item={items} />
      ))}
        </div>
        <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
          <div className="border rounded-md p-5">
            <p className="uppercase font-bold opacity-60 pb-4">
              Price Deatils{" "}
            </p>
            <hr />
            <div className="space-y-3 font-semibold mb-10">
              <div className="flex justify-between pt-3 text-black">
                <span>Price</span>
                <span>₹{order.order?.totalPrice}</span>
              </div>
              <div className="flex justify-between pt-3 ">
                <span>Discount</span>
                <span className="text-green-600">
                  -₹{order.order?.discounte}
                </span>
              </div>
              <div className="flex justify-between pt-3 ">
                <span>Delivery Charges</span>
                <span className="text-green-600">Free</span>
              </div>
              <div className="flex justify-between pt-3 font-bold">
                <span>Total Amount </span>
                <span className="text-green-600">
                  ₹{order.order?.totalDiscountedPrice}
                </span>
              </div>
            </div>

            <Button
              variant="contained"
              className="w-full mt-5"
              sx={{ px: "2.5rem", py: ".7rem", bgcolor: "#653bba", mt: 2 }}
              onClick={handleCheckOut}
            >
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
