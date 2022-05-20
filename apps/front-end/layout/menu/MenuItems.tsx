import PeopleIcon from "@mui/icons-material/People";
import React from "react";
import { Role } from "@common";
import { Home } from "@mui/icons-material";

export interface MenuItem {
  href: string;
  icon: JSX.Element;
  title: string;
  roles: Role[];
}

export const menuItems: MenuItem[] = [
  {
    href: "/",
    icon: <Home fontSize="small" />,
    roles: [],
    title: "Home"
  },
  {
    href: "/users",
    icon: <PeopleIcon fontSize="small" />,
    roles: [Role.ADMIN],
    title: "Users"
  }
];
