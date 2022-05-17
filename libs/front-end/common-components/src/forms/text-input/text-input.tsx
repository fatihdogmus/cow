import { Controller, useFormContext } from "react-hook-form";
import { TextField } from "@mui/material";

export interface TextInputProps {
  id: string;
  name: string;
  label: string;
  type?: "text" | "email" | "password";
}

export function TextInput({ id, name, label, type = "text" }: TextInputProps) {
  const { formState, control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        return (
          <TextField
            {...field}
            id={id}
            label={label}
            fullWidth
            error={!!formState.errors[name]}
            helperText={formState.errors[name]?.message}
            type={type}
          />
        );
      }}
    />
  );
}
