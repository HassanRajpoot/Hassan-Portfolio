// Hardcoded credentials for admin login
const ADMIN_CREDENTIALS = {
  username: "hassanshahzad1908@gmail.com",
  password: "@gL%)PCQ@ZwjD9nbeb",
}

export const verifyCredentials = (username: string, password: string): boolean => {
  return username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password
}

export const setAuthToken = (): void => {
  if (typeof window === "undefined") return
  localStorage.setItem("admin_token", "authenticated")
}

export const clearAuthToken = (): void => {
  if (typeof window === "undefined") return
  localStorage.removeItem("admin_token")
}

export const isAuthenticated = (): boolean => {
  if (typeof window === "undefined") return false
  return localStorage.getItem("admin_token") === "authenticated"
}
