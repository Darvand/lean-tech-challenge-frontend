import { useAuth0 } from "@auth0/auth0-react";
import {
  AppBar,
  Box,
  Button,
  Container,
  Stack,
  Typography,
} from "@mui/material";

import { Outlet, useNavigate } from "react-router";

export const MainLayout = () => {
  const { logout } = useAuth0();
  const navigate = useNavigate();
  return (
    <Container maxWidth={false} disableGutters>
      <AppBar position="static">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 2,
          }}
        >
          <Typography variant="h6">Event Management</Typography>
          <Stack direction="row" spacing={2}>
            <Button
              color="inherit"
              onClick={() => navigate("/", { replace: true })}
            >
              Home
            </Button>
            <Button color="inherit" onClick={() => logout()}>
              Logout
            </Button>
          </Stack>
        </Box>
      </AppBar>
      <Outlet />
    </Container>
  );
};
