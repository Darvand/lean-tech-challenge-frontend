import { useAuth0 } from "@auth0/auth0-react";

export const useAuthToken = () => {
  const { getAccessTokenSilently, isAuthenticated } = useAuth0();
  const getToken = async () => {
    try {
      if (!isAuthenticated) {
        return null;
      }
      return await getAccessTokenSilently();
    } catch (error) {
      console.error(error);
      return null;
    }
  };
  return { getToken };
};
