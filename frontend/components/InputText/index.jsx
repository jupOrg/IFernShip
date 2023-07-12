import { Input } from "./style.js";
import React from "react";
import { Controller } from "react-hook-form";

export default function InputText({
  placeholderText,
  secureTextEntryText,
  keyboardTypeText,
  control,
  name,
  error,
  ...rest
}) {
  return (
    <>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            placeholder={placeholderText}
            secureTextEntry={secureTextEntryText}
            keyboardType={keyboardTypeText}
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            {...rest}
          />
        )}
        name={name}
      />
      {/* {!!error && <ErrorInput description={error.message} />} */}
    </>
  );
}
