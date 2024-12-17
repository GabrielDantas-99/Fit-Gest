export interface User {
  name: string;
  email: string;
  phone: string;
  role?: "ADMIN" | "PERSONAL" | "USER";
}
