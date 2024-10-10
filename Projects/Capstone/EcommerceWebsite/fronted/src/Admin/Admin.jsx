/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
  useTheme,
  useMediaQuery,
  Box,
  Toolbar,
  List,
  ListItem,
  ListItemIcon,
  ListItemButton,
  CssBaseline,
  Drawer,
  ListItemText,
} from "@mui/material"; // Imports for MUI hooks
import { Route, Routes, useNavigate } from "react-router-dom"; // Import for React Router
import EmailIcon from "@mui/icons-material/Email";
import InboxIcon from "@mui/icons-material/Inbox";
import DashboardIcon from "@mui/icons-material/Dashboard";
import InventoryIcon from "@mui/icons-material/Inventory";
import GroupIcon from "@mui/icons-material/Group";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AddBoxIcon from "@mui/icons-material/AddBox";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { AdminDashboard } from "./components/AdminDashboard";
import ProductsTable from "./components/ProductsTable";
import CustomersTable from "./components/CustomersTable";
import OrdersTable from "./components/OrdersTable";
import CreateProductForm from "./components/CreateProductForm";

const menu = [
  { name: "DashBoard", path: "/admin", icon: <DashboardIcon /> },
  { name: "Products", path: "/admin/products", icon: <InventoryIcon /> },
  { name: "Customers", path: "/admin/customers", icon: <GroupIcon /> },
  { name: "Orders", path: "/admin/orders", icon: <ShoppingCartIcon /> },
  { name: "AddProduct", path: "/admin/product/create", icon: <AddBoxIcon /> },
  // {name:"",path: ""},
];
const Admin = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const [sideBarVisible, setSidebarVisible] = useState(false);
  const navigate = useNavigate();

  const drawer = (
    <Box
      sx={{
        overflow: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
      }}
    >
      {/* {isLargeScreen && <Toolbar />} */}
      <List>
        {menu.map((item, index) => (
          <ListItem
            key={item.name}
            disablePadding
            onClick={() => navigate(item.path)}
          >
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText>{item.name}</ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText>Account</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
  return (
    <div>
      <div className="flex h-[100vh] ">
        <CssBaseline/>
        <div className="w-[15%] border border-r-gray-300 h-full">
          {drawer}
        </div>
        <div className="w-[85%]">
          <Routes>
            <Route exact path="/" element={<AdminDashboard />} />
            <Route exact path="/products" element={<ProductsTable />} />
            <Route exact path="/customers" element={<CustomersTable />} />
            <Route exact path="/orders" element={<OrdersTable />} />
            <Route exact path="/product/create" element={<CreateProductForm />} />
            {/* <Route path="*" element={<NoMatch />} /> */}
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Admin;
