import { ReactNode } from "react";
import { useAuthToken } from "../hooks/useAuthToken";
import { store } from "../state/store";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { getToken } = useAuthToken();
  store.dispatch({ type: "auth/setTokenProvider", payload: getToken });

  return children;
};
