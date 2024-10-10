/* eslint-disable no-unused-vars */
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../Customer/pages/HomePage/HomePage";
import Cart from "../customer/Components/Cart/Cart";
import Navigation from "../customer/Components/Navigation/Navigation";
import Footer from "../customer/Components/Footer/Footer";

import ProductDetails from "../customer/Components/ProductDetails/ProductDetails";
import CheckOut from "../customer/Components/CheckOut/CheckOut";
import Order from "../customer/Components/Order/Order";
import OrderDetails from "../customer/Components/Order/OrderDetails";
import Product from "../customer/Components/Product/Product";
import PaymentSuccess from "../customer/Components/Payment/PaymentSuccess";


const CustomerRoutes = () => {
  return (
    <div>
      <div>
        <Navigation />
      </div>
      <Routes>
        <Route path="/login" element={<HomePage />} />
        <Route path="/register" element={<HomePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<Cart />} />

        <Route path="/:levelOne/:levelTwo/:levelThree" element={<Product />} />
        {/* like women/clothing/top */}

        <Route path="/product/:productId" element={<ProductDetails />} />
        {/* product/89 */}

        <Route path="/checkout" element={<CheckOut />} />

        <Route path="/account/order" element={<Order />} />
        <Route path="/account/order/:orderId" element={<OrderDetails />} />

        <Route path='/payment/:orderId' element={<PaymentSuccess/>}/>
      </Routes>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default CustomerRoutes;
