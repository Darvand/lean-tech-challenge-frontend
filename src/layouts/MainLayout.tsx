import { AppBar, Box, Button, Container, Typography } from "@mui/material";

import { Outlet } from "react-router";

export const MainLayout = () => {
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
          <Button color="inherit">Login</Button>
        </Box>
      </AppBar>
      <Outlet />
    </Container>
  );
};
