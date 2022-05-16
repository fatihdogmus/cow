import BarChartIcon from "@mui/icons-material/BarChart";
import PeopleIcon from "@mui/icons-material/People";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import SettingsIcon from "@mui/icons-material/Settings";
import LockIcon from "@mui/icons-material/Lock";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import CancelIcon from "@mui/icons-material/Cancel";
import React from "react";

export interface MenuItem {
  href: string;
  icon: JSX.Element;
  title: string;
}

export const menuItems: MenuItem[] = [
  {
    href: "/",
    icon: <BarChartIcon fontSize="small" />,
    title: "Dashboard"
  },
  {
    href: "/customers",
    icon: <PeopleIcon fontSize="small" />,
    title: "Customers"
  },
  {
    href: "/products",
    icon: <ShoppingBagIcon fontSize="small" />,
    title: "Products"
  },
  {
    href: "/account",
    icon: <PersonIcon fontSize="small" />,
    title: "Account"
  },
  {
    href: "/settings",
    icon: <SettingsIcon fontSize="small" />,
    title: "Settings"
  },
  {
    href: "/login",
    icon: <LockIcon fontSize="small" />,
    title: "Login"
  },
  {
    href: "/register",
    icon: <PersonAddIcon fontSize="small" />,
    title: "Register"
  },
  {
    href: "/404",
    icon: <CancelIcon fontSize="small" />,
    title: "Error"
  }
];
