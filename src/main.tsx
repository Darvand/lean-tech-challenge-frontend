import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router";
import { MainLayout } from "./layouts/MainLayout.tsx";
import { Home } from "./pages/Home.tsx";
import { EventDetail } from "./pages/EventDetail.tsx";
import { EventCreate } from "./pages/EventCreate.tsx";

const theme = createTheme();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="event/create" element={<EventCreate />} />
            <Route path="event/:id" element={<EventDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
