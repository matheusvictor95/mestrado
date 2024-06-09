"use client";

import { Box, Button, TextField } from "@mui/material";
import { Create } from "@refinedev/mui";
import { useForm } from "@refinedev/react-hook-form";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const API_URL = "http://localhost:3001/professores"; // Substitua pela URL correta

export default function ProfessoresCreate() {
  const {
    saveButtonProps,
    refineCore: { formLoading, onFinish },
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm({
    refineCoreProps: {
      onFinish: async (data) => {
        try {
          // Adiciona o id usando UUID
          const novoProfessor = { ...data, id: uuidv4() };
          const response = await axios.post(API_URL, novoProfessor);
          console.log("Professor criado com sucesso:", response.data);
        } catch (error) {
          console.error("Erro ao criar professor:", error);
        }
      },
    },
  });

  return (
    <Create isLoading={formLoading} saveButtonProps={saveButtonProps}>
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
    </Create>
  );
}
