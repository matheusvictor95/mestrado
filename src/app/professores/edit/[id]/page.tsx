"use client";
import { Autocomplete, Box, Select, TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { Edit, useAutocomplete } from "@refinedev/mui";
import { useForm } from "@refinedev/react-hook-form";
import React from "react";
import { Controller } from "react-hook-form";

export default function ProfessoresEdit() {
  const {
    saveButtonProps,
    refineCore: { queryResult, formLoading, onFinish },
    handleSubmit,
    register,
    control,
    setValue,
    formState: { errors },
  } = useForm({});

  const professorData = queryResult?.data?.data;

  // Preenchendo o formulário com os dados do professor quando `professorData` estiver disponível
  React.useEffect(() => {
    if (professorData) {
      setValue("nome", professorData.nome);
      // Adicione outros campos conforme necessário
    }
  }, [professorData, setValue]);

  return (
    <Edit isLoading={formLoading} saveButtonProps={saveButtonProps}>
      <Box
        component="form"
        sx={{ display: "flex", flexDirection: "column" }}
        autoComplete="off"
        onSubmit={handleSubmit(onFinish)}
      >
        <TextField
          {...register("nome", {
            required: "This field is required",
          })}
          error={!!errors.nome}
          helperText={errors.nome?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          type="text"
          label={"Nome"}
          name="nome"
        />
      </Box>
    </Edit>
  );
}
