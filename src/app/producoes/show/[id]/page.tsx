"use client";

import { Stack, Typography } from "@mui/material";
import { useOne, useShow } from "@refinedev/core";
import {
  DateField,
  MarkdownField,
  Show,
  TextFieldComponent as TextField,
} from "@refinedev/mui";

export default function ProducoesShow() {
  const { queryResult } = useShow({});

  const { data, isLoading } = queryResult;

  const record = data?.data;


  return (
    <Show isLoading={isLoading}>
      <Stack gap={1}>
        <Typography variant="body1" fontWeight="bold">
          {"ID"}
        </Typography>
        <TextField value={record?.id} />

        <Typography variant="body1" fontWeight="bold">
          {"descricao"}
        </Typography>
        <TextField value={record?.descricao} />

        <Typography variant="body1" fontWeight="bold">
          {"sigla"}
        </Typography>
        <MarkdownField value={record?.sigla} />

  
        <Typography variant="body1" fontWeight="bold">
          {"evento_periodico"}
        </Typography>
        <TextField value={record?.evento_periodico} />

        <Typography variant="body1" fontWeight="bold">
          {"qualis"}
        </Typography>
        <TextField value={record?.qualis} />


        <Typography variant="body1" fontWeight="bold">
          {"CreatedAt"}
        </Typography>
        <DateField value={record?.createdAt} />
      </Stack>
    </Show>
  );
}
