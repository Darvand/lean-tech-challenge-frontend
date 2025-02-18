import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { MainLayout } from "./layouts/MainLayout.tsx";
import { Home } from "./pages/Home.tsx";
import { EventDetail } from "./pages/EventDetail.tsx";
import { EventCreate } from "./pages/EventCreate.tsx";
import { Provider } from "react-redux";
import { store } from "./state/store.ts";
import { Auth0ProviderWithHistory } from "./providers/auth0.provider.tsx";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import { AuthProvider } from "./providers/auth.provider.tsx";

const theme = createTheme();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Auth0ProviderWithHistory>
          <Provider store={store}>
            <AuthProvider>
              <CssBaseline />
              <Routes>
                <Route Component={withAuthenticationRequired(MainLayout)}>
                  <Route path="/" element={<Home />} />
                  <Route path="event/create" element={<EventCreate />} />
                  <Route path="event/:id" element={<EventDetail />} />
                  <Route path="*" element={<Navigate to="/" replace />} />
                </Route>
              </Routes>
            </AuthProvider>
          </Provider>
        </Auth0ProviderWithHistory>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
