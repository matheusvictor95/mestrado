"use client";
import { Autocomplete, Box, Select, TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { Edit, useAutocomplete } from "@refinedev/mui";
import { useForm } from "@refinedev/react-hook-form";
import React from "react";
import { Controller } from "react-hook-form";

export default function ProducoesEdit() {
  const {
    saveButtonProps,
    refineCore: { queryResult, formLoading, onFinish },
    handleSubmit,
    register,
    control,
    setValue,
    formState: { errors },
  } = useForm({});

  const producoesData = queryResult?.data?.data;

  // Preenchendo o formulário com os dados do professor quando `professorData` estiver disponível
  React.useEffect(() => {
    if (producoesData) {
      setValue("descricao", producoesData.descricao);
      setValue("sigla", producoesData.sigla);
      setValue("evento_periodico", producoesData.evento_periodico);
      setValue("qualis", producoesData.qualis);
      // Adicione outros campos conforme necessário
    }
  }, [producoesData, setValue]);

  return (
    <Edit isLoading={formLoading} saveButtonProps={saveButtonProps}>
      <Box
        component="form"
        sx={{ display: "flex", flexDirection: "column" }}
        autoComplete="off"
        onSubmit={handleSubmit(onFinish)}
      >
        <TextField
                    {...register("descricao", {
                        required: "This field is required",
                    })}
                    error={!!errors.descricao}
                    helperText={errors.descricao?.message}
                    margin="normal"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    type="textarea"
                    label={"Descrição"}
                    name="descricao"
                />
                <TextField
                    {...register("sigla", {
                        required: "This field is required",
                    })}
                    error={!!errors.sigla}
                    helperText={errors.sigla?.message}
                    margin="normal"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    type="text"
                    label={"Sigla"}
                    name="sigla"
                />
                <TextField
                    {...register("evento_periodico", {
                        required: "This field is required",
                    })}
                    error={!!errors.evento_periodico}
                    helperText={errors.evento_periodico?.message}
                    margin="normal"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    type="text"
                    label={"Evento Periodico"}
                    name="evento_periodico"
                />
                 <TextField
                    {...register("qualis", {
                        required: "This field is required",
                    })}
                    error={!!errors.qualis}
                    helperText={errors.qualis?.message}
                    margin="normal"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    type="text"
                    label={"Qualis"}
                    name="qualis"
                />
      </Box>
    </Edit>
  );
}