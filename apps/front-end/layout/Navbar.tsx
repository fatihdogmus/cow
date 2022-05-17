import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Button,
  Container,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Toolbar,
  Tooltip,
  useTheme
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PeopleIcon from "@mui/icons-material/People";
import styled from "@emotion/styled";
import { useState } from "react";
import { CForm, TextInput } from "@cow/front-end/common-components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";

interface Props {
  onSidebarOpen: () => void;
}

interface LoginModel {
  email: string;
  password: string;
}

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
    return setSignInModalOpen(false);
  }

  const schema = yup.object({
    email: yup.string().required()
  });

  const methods = useForm<LoginModel>({
    mode: "onBlur",
    resolver: yupResolver(schema)
  });

  async function submit(values) {
    console.log(values);
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
            }}
            src="/static/images/avatars/avatar_1.png">
            <AccountCircleIcon fontSize="small" />
          </Avatar>
        </Toolbar>
      </DashboardNavbarRoot>
      <Dialog open={isSignInModalOpen} onClose={closeSignInModal}>
        <DialogTitle>Sign-in</DialogTitle>
        <DialogContent>
          <Box
            component="main"
            sx={{
              alignItems: "center",
              display: "flex",
              flexGrow: 1,
              minHeight: "100%"
            }}>
            <Container maxWidth="sm">
              <CForm methods={methods} submit={submit}>
                <TextInput id="email" name="email" label="E-Mail" type="email" />
              </CForm>
            </Container>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};
