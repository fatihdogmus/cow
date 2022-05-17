import { FormProvider, UseFormReturn } from "react-hook-form";
import React from "react";
import { Box, Button } from "@mui/material";
import { FieldValues } from "react-hook-form/dist/types/fields";

export interface CFormProps<FormType> {
  methods: UseFormReturn<FormType>;
  children: JSX.Element | JSX.Element[];
  submit: (values: unknown) => Promise<void>;
  fullWidth?: boolean;
  buttonLabel?: string;
}

export function CForm<FormType extends FieldValues>({
  methods,
  submit,
  buttonLabel = "Submit",
  children
}: CFormProps<FormType>) {
  return (
    <FormProvider {...methods}>
      <form className="mt-5" noValidate onSubmit={methods.handleSubmit(submit)}>
        {children}
        <Box sx={{ py: 2 }}>
          <Button color="primary" fullWidth size="large" type="submit" variant="contained">
            {buttonLabel}
          </Button>
        </Box>
      </form>
    </FormProvider>
  );
}

export default CForm;
