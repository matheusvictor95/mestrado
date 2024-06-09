"use client";

import dataProviderSimpleRest from "@refinedev/simple-rest";
import axios from "axios";
import { DataProvider } from "@refinedev/core";




const API_URL = "http://localhost:3001";

const axiosInstance = axios.create({
    baseURL: API_URL,
  });

  const dataProvider: DataProvider = {
      getList: async ({ resource, pagination, sort, filters }) => {
          const response = await axiosInstance.get(`/${resource}`);
          return {
              data: response.data,
              total: response.data.length,
          };
      },
      getOne: async ({ resource, id }) => {
          const response = await axiosInstance.get(`/${resource}/${id}`);
          return {
              data: response.data,
          };
      },
      create: async ({ resource, variables }) => {
          const response = await axiosInstance.post(`/${resource}`, variables);
          return {
              data: response.data,
          };
      },
      update: async ({ resource, id, variables }) => {
          const response = await axiosInstance.put(`/${resource}/${id}`, variables);
          return {
              data: response.data,
          };
      },
      deleteOne: async ({ resource, id }) => {
          const response = await axiosInstance.delete(`/${resource}/${id}`);
          return {
              data: response.data,
          };
      },
      getApiUrl: function (): string {
          throw new Error("Function not implemented.");
      }
  };
  
  export { dataProvider };
