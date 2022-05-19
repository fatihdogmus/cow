import React from "react";
import { useForm } from "react-hook-form";
import { Box, Dialog, DialogContent, DialogTitle } from "@mui/material";
import { CForm, TextInput } from "@cow/front-end/common-components";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface Props {
  isSignInModalOpen: boolean;
  closeSignInModal: () => void;
  submit: (values: LoginModel) => Promise<void>;
}

export interface LoginModel {
  username: string;
  password: string;
}

const defaultValues: LoginModel = {
  username: "",
  password: ""
};

function LoginModal({ isSignInModalOpen, closeSignInModal, submit }: Props) {
  const schema = yup.object({
    username: yup.string().required(),
    password: yup.string().required()
  });

  const methods = useForm<LoginModel>({
    resolver: yupResolver(schema),
    defaultValues
  });
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
