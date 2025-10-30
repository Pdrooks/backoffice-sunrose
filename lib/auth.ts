import { UserRecord, users } from "./data";

export type PublicUser = Omit<UserRecord, "password">;

export const authenticateUser = (email: string, password: string): PublicUser | null => {
  const normalizedEmail = email.trim().toLowerCase();
  const found = users.find(
    (user) =>
      user.email.toLowerCase() === normalizedEmail && user.password === password.trim()
  );

  if (!found) {
    return null;
  }

  const { password: _, ...publicUser } = found;
  return publicUser;
};
