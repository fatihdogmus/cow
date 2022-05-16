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
  TextField,
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
import { useForm } from "react-hook-form";

interface Props {
  onSidebarOpen: () => void;
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

  const { register, handleSubmit, formState, control } = useForm({});

  function submit(values) {
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
              <form onSubmit={handleSubmit(submit)}>
                <TextField
                  fullWidth
                  label="Email Address"
                  margin="normal"
                  name="email"
                  type="email"
                  variant="outlined"
                />
                <TextField
                  fullWidth
                  label="Password"
                  margin="normal"
                  name="password"
                  type="password"
                  variant="outlined"
                />
                <Box sx={{ py: 2 }}>
                  <Button color="primary" fullWidth size="large" type="submit" variant="contained">
                    Sign In Now
                  </Button>
                </Box>
              </form>
            </Container>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};
