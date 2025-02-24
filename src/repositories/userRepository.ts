import { User } from "@/entities/User";
import { api } from "@/infrastructure/api";

export const UserRepository = {
  getUserById: async (id: string): Promise<User> => {
    const res = await api.get(`/users/${id}`);
    return res.data;
  },
};
