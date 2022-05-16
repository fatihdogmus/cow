import { useState } from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";

const Content = styled("div")(({ theme }) => ({
  display: "flex",
  flex: "1 1 auto",
  maxWidth: "100%",
  paddingTop: 128,
  [theme.breakpoints.up("lg")]: {
    paddingLeft: 320
  }
}));

export const Layout = props => {
  const { children } = props;
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  return (
    <>
      <Content>
        <Box
          sx={{
            display: "flex",
            flex: "1 1 auto",
            flexDirection: "column",
            width: "100%"
          }}>
          {children}
        </Box>
      </Content>
      <Navbar onSidebarOpen={() => setSidebarOpen(true)} />
      <Sidebar onClose={() => setSidebarOpen(false)} open={isSidebarOpen} />
    </>
  );
};
