import React, { FC } from "react";
import { Controller } from "react-hook-form";
import { TextField as TextFieldMUI, Typography } from "@mui/material";
// import { primary } from "../../theme/color";

interface TextFieldProps {
  name: string;
  type?: string;
  control: any;
  error: any;
  rules: any;
  label: string;
  inputProps?: any;
  customSx?: any;
  size?: "small" | "medium" | undefined;
}

const MTextField: FC<TextFieldProps> = ({
  name,
  type,
  control,
  error,
  rules,
  label,
  inputProps,
  customSx,
  size = "small",
}) => {
  return (
    <div className='mb-4'>
      <Controller
        render={({ field }) => (
          <TextFieldMUI
            {...field}
            fullWidth
            type={type || "text"}
            color='primary'
            sx={customSx}
            autoComplete='false'
            size={size}
            label={label}
            variant='outlined'
            InputProps={inputProps || undefined}
          />
        )}
        name={name}
        control={control}
        rules={rules}
      />
      <Typography color='error' textAlign={"left"} sx={{ py: "4px" }}>
        {error[name] && error[name].message}
      </Typography>
    </div>
  );
};

export default MTextField;
