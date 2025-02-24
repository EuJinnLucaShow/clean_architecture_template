import { useUser } from "@/hooks/useUser";
import { UserCard } from "@/ui/components/UserCard";

export const Profile = () => {
  const { user, loading, error } = useUser("123");

  if (loading) {
    return <p>Завантаження...</p>;
  }

  if (error) {
    return <p>Помилка: {error}</p>;
  }

  if (!user) {
    return <p>Користувача не знайдено.</p>;
  }

  return <UserCard user={user} />;
};
