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

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { password: _password, ...publicUser } = found;
  return publicUser;
};
