// /* eslint-disable no-unused-vars */

import { Route, Routes } from "react-router-dom";
// import Cart from "./customer/Components/Cart/Cart";
// import CheckOut from "./customer/Components/CheckOut/CheckOut";
// import Footer from "./customer/Components/Footer/Footer";
// import Navigation from "./customer/Components/Navigation/Navigation";
// import Order from "./customer/Components/Order/Order";
// import OrderDetails from "./customer/Components/Order/OrderDetails";
// import Product from "./customer/Components/Product/Product";
// import ProductDetails from "./customer/Components/ProductDetails/ProductDetails";
import CustomerRoutes from "./Routes/CustomerRoutes";
import AdminRoutes from "./Routes/AdminRoutes";

// import HomePage from "./customer/pages/HomePage/HomePage";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<CustomerRoutes />} />
        <Route path="/admin/*" element={<AdminRoutes />} />
      </Routes>
      {/* <Navigation/> */}

      {/* <div> */}
        {/* <HomePage/> */}
        {/* <Product/> */}
        {/* <ProductDetails/> */}
        {/* <Cart/> */}
        {/* <CheckOut/> */}
        {/* <Order/> */}
        {/* <OrderDetails/> */}
      {/* </div> */}

      {/* <Footer/> */}
    </div>
  );
}
