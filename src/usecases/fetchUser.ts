import { UserRepository } from "@/repositories/userRepository";

export const fetchUser = async (id: string) => {
  return await UserRepository.getUserById(id);
};
