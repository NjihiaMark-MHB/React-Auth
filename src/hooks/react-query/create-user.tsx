import { useMutation } from "@tanstack/react-query";
import type { inferredCreateUserSchema } from "@/types/sign-up";
import apiClient from "@/api/apiClient";

const createUser = async (data: inferredCreateUserSchema) => {
  const response = await apiClient.post("/users", data);
  return response.data;
};

export function useCreateUser() {
  return useMutation({
    mutationFn: createUser,
  });
}
