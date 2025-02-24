import { User } from "@/entities/User";

type Props = { user: User };

export const UserCard = ({ user }: Props) => (
  <div>
    <h3>{user.name}</h3>
    <p>{user.email}</p>
  </div>
);
