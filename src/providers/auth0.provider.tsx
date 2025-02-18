import { ReactNode } from "react";
import { Auth0Provider } from "@auth0/auth0-react";

export const Auth0ProviderWithHistory = ({
  children,
}: {
  children: ReactNode;
}) => {
  return (
    <Auth0Provider
      domain="darvand.auth0.com"
      clientId="wXH1IdmEIM03QgtvDnt7GnjFUdDu5Ncw"
      authorizationParams={{
        redirect_uri: window.location.origin,
        audience: "https://ticket-system.com",
      }}
    >
      {children}
    </Auth0Provider>
  );
};
