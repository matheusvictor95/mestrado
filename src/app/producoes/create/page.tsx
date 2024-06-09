"use client";

import { Box, Button, TextField } from "@mui/material";
import { Create } from "@refinedev/mui";
import { useForm } from "@refinedev/react-hook-form";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const API_URL = "http://localhost:3001/producoes"; // Substitua pela URL correta

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
            onFinish: async (data: any) => {
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
        </Create>
    );
}
