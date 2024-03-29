import React, { useEffect } from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { Box, Divider, Drawer, Theme, useMediaQuery } from "@mui/material";
import { NavItem } from "./nav-item";
import { menuItems } from "./MenuItems";
import logo from "../../public/ceng-logo.png";
import Image from "next/image";
import { useSelector } from "react-redux";
import { ApplicationState } from "@cow/front-end/store";
import { Role } from "@common";

interface Props {
  onClose: () => void;
  open: boolean;
}

export const Sidebar = (props: Props) => {
  const { open, onClose } = props;
  const router = useRouter();
  const lgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up("lg"), {
    defaultMatches: true,
    noSsr: false
  });

  const userRole = useSelector<ApplicationState, Role>(state => state.user.role);

  useEffect(() => {
    if (!router.isReady) {
      return;
    }

    if (open) {
      onClose?.();
    }
  }, [router.asPath]);

  const content = (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%"
        }}>
        <div>
          <Box sx={{ p: 3 }}>
            <NextLink href="/" passHref>
              <a>
                <Image src={logo} width={42} height={42} alt="logo" />
              </a>
            </NextLink>
          </Box>
        </div>
        <Divider
          sx={{
            borderColor: "#2D3748",
            my: 3
          }}
        />
        <Box sx={{ flexGrow: 1 }}>
          {menuItems
            .filter(item => item.roles.includes(userRole) || item.roles.length === 0)
            .map(item => (
              <NavItem key={item.title} icon={item.icon} href={item.href} title={item.title} />
            ))}
        </Box>
        <Divider sx={{ borderColor: "#2D3748" }} />
      </Box>
    </>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: "#111827",
            color: "#FFFFFF",
            width: 280
          }
        }}
        variant="permanent">
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: "#111827",
          color: "#FFFFFF",
          width: 280
        }
      }}
      sx={{ zIndex: theme => theme.zIndex.appBar + 100 }}
      variant="temporary">
      {content}
    </Drawer>
  );
};
