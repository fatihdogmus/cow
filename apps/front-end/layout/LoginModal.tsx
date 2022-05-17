import React from "react";
import { UseFormReturn } from "react-hook-form";
import { Box, Dialog, DialogContent, DialogTitle } from "@mui/material";
import { CForm, TextInput } from "@cow/front-end/common-components";
import { LoginModel } from "./Navbar";

interface Props {
  isSignInModalOpen: boolean;
  closeSignInModal: () => void;
  methods: UseFormReturn<LoginModel>;
  submit: (values: LoginModel) => Promise<void>;
}

function LoginModal({ isSignInModalOpen, closeSignInModal, methods, submit }: Props) {
  return (
    <Dialog sx={{ minWidth: "400px" }} open={isSignInModalOpen} onClose={closeSignInModal}>
      <DialogTitle sx={{ minWidth: "150px" }}>Log in</DialogTitle>
      <DialogContent sx={{ minWidth: "400px" }}>
        <Box
          component="main"
          sx={{
            alignItems: "center",
            display: "flex",
            flexGrow: 1,
            minHeight: "100%"
          }}>
          <CForm header="" methods={methods} submit={submit}>
            <TextInput id="username" name="username" label="Username" />
            <TextInput id="password" name="password" label="Password" type="password" />
          </CForm>
        </Box>
      </DialogContent>
    </Dialog>
  );
}

export default LoginModal;
