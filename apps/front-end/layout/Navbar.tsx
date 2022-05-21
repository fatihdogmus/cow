import { AppBar, Avatar, Badge, Box, Button, IconButton, Toolbar, Tooltip } from "@mui/material/";

import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import styled from "@emotion/styled";
import { useState } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { DispatchType, UserActions } from "@cow/front-end/store";
import { AuthenticationService, LoginModal, LoginModel } from "@cow/front-end/authentication";

const DashboardNavbarRoot = styled(AppBar)(() => {
  const theme = useTheme();
  return {
    backgroundColor: theme.palette.background.paper,
    boxShadow: "0px 3px 6px rgba(100, 116, 139, 0.12)"
  };
});

export const Navbar = (props: { onSidebarOpen: () => void }) => {
  const { onSidebarOpen, ...other } = props;
  const [isSignInModalOpen, setSignInModalOpen] = useState(false);
  const dispatch = useDispatch<DispatchType>();

  const authenticationService = new AuthenticationService();

  async function submit(values: LoginModel) {
    const messageResponse = await authenticationService.login(values.username, values.password);
    if (messageResponse.resultType === "INFO") {
      setSignInModalOpen(false);
      toast.success(messageResponse.message);
    }
    const loggedInUser = await authenticationService.getLoggedInUser();
    dispatch(UserActions.login(loggedInUser));
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
          {/*<Tooltip title="Search">*/}
          {/*  <IconButton sx={{ ml: 1 }}>*/}
          {/*    <SearchIcon fontSize="small" />*/}
          {/*  </IconButton>*/}
          {/*</Tooltip>*/}
          <Box sx={{ flexGrow: 1 }} />
          {/*<Tooltip title="Contacts">*/}
          {/*  <IconButton sx={{ ml: 1 }}>*/}
          {/*    <PeopleIcon fontSize="small" />*/}
          {/*  </IconButton>*/}
          {/*</Tooltip>*/}
          <Tooltip title="Notifications">
            <IconButton sx={{ ml: 1 }}>
              <Badge badgeContent={4} color="primary" variant="dot">
                <NotificationsIcon fontSize="small" />
              </Badge>
            </IconButton>
          </Tooltip>
          <Tooltip title="Sign-in">
            <div className="ml-2 mr-2">
              <Button onClick={() => setSignInModalOpen(true)} variant="contained">
                Sign-in
              </Button>
            </div>
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
      {isSignInModalOpen ? (
        <LoginModal
          isSignInModalOpen={isSignInModalOpen}
          closeSignInModal={() => setSignInModalOpen(false)}
          submit={submit}
        />
      ) : null}
    </>
  );
};
