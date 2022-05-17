import { AppBar, Avatar, Badge, Box, Button, IconButton, Toolbar, Tooltip, useTheme } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PeopleIcon from "@mui/icons-material/People";
import styled from "@emotion/styled";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";
import axios from "axios";
import { MessageResponse } from "@cow/common";
import LoginModal from "./LoginModal";
import { toast } from "react-toastify";

interface Props {
  onSidebarOpen: () => void;
}

export interface LoginModel {
  username: string;
  password: string;
}

const defaultValues: LoginModel = {
  username: "",
  password: ""
};

const DashboardNavbarRoot = styled(AppBar)(() => {
  const theme = useTheme();
  return {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[3]
  };
});

export const Navbar = (props: Props) => {
  const { onSidebarOpen, ...other } = props;

  const [isSignInModalOpen, setSignInModalOpen] = useState(false);

  function openSignInModal() {
    setSignInModalOpen(true);
  }

  function closeSignInModal() {
    methods.reset();
    return setSignInModalOpen(false);
  }

  const schema = yup.object({
    username: yup.string().required(),
    password: yup.string().required()
  });

  const methods = useForm<LoginModel>({
    resolver: yupResolver(schema),
    defaultValues
  });

  async function submit(values: LoginModel) {
    const messageResponse = (await axios.post<MessageResponse>("/api/auth/login", values)).data;
    if (messageResponse.resultType === "INFO") {
      closeSignInModal();
      toast.success(messageResponse.message);
    }
    console.log(messageResponse);
  }

  return (
    <>
      <DashboardNavbarRoot
        sx={{
          left: {
            lg: 280
          },
          width: {
            lg: "calc(100% - 280px)"
          }
        }}
        {...other}>
        <Toolbar
          disableGutters
          sx={{
            minHeight: 64,
            left: 0,
            px: 2
          }}>
          <IconButton
            onClick={onSidebarOpen}
            sx={{
              display: {
                xs: "inline-flex",
                lg: "none"
              }
            }}>
            <MenuIcon fontSize="small" />
          </IconButton>
          <Tooltip title="Search">
            <IconButton sx={{ ml: 1 }}>
              <SearchIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          <Box sx={{ flexGrow: 1 }} />
          <Tooltip title="Contacts">
            <IconButton sx={{ ml: 1 }}>
              <PeopleIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Notifications">
            <IconButton sx={{ ml: 1 }}>
              <Badge badgeContent={4} color="primary" variant="dot">
                <NotificationsIcon fontSize="small" />
              </Badge>
            </IconButton>
          </Tooltip>
          <Tooltip title="Sign-in">
            <Button onClick={openSignInModal} variant="contained">
              Sign-in
            </Button>
          </Tooltip>
          <Avatar
            sx={{
              height: 40,
              width: 40,
              ml: 1
            }}>
            <AccountCircleIcon fontSize="small" />
          </Avatar>
        </Toolbar>
      </DashboardNavbarRoot>
      <LoginModal
        isSignInModalOpen={isSignInModalOpen}
        closeSignInModal={closeSignInModal}
        methods={methods}
        submit={submit}
      />
    </>
  );
};
