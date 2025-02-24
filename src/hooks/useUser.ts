import { useState, useEffect } from "react";

interface User {
  id: string;
  name: string;
  email: string;
  avatarUrl: string;
}

export function useUser(userId: string) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchUserData() {
      try {
        const response = await fetch(`/api/user/${userId}`);
        if (!response.ok) {
          throw new Error("Не вдалося отримати дані користувача");
        }
        const data = await response.json();
        setUser(data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Сталася невідома помилка");
        }
      } finally {
        setLoading(false);
      }
    }

    fetchUserData();
  }, [userId]);

  return { user, loading, error };
}
