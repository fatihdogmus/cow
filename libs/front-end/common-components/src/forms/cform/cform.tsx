import { FormProvider, UseFormReturn } from "react-hook-form";
import React from "react";
import { Button, Card, CardHeader } from "@mui/material";
import { FieldValues } from "react-hook-form/dist/types/fields";

export interface CFormProps<FormType> {
  methods: UseFormReturn<FormType>;
  children: JSX.Element | JSX.Element[];
  submit: (values: unknown) => Promise<void>;
  header: string;
  fullWidth?: boolean;
  buttonLabel?: string;
}

export function CForm<FormType extends FieldValues>({
  methods,
  submit,
  buttonLabel = "Submit",
  children,
  header
}: CFormProps<FormType>) {
  return (
    <div className="flex justify-center mt-3">
      <Card className="col-12 md:col-6 w-full" sx={{ minWidth: "450px" }}>
        <CardHeader title={header} />
        <FormProvider {...methods}>
          <form noValidate onSubmit={methods.handleSubmit(submit)}>
            {children}
            <div className="flex justify-end">
              <div className="mr-3">
                <Button color="error" variant="contained">
                  Cancel
                </Button>
              </div>
              <Button color="primary" type="submit" variant="contained">
                {buttonLabel}
              </Button>
            </div>
          </form>
        </FormProvider>
      </Card>
    </div>
  );
}

export default CForm;
