import { Box, Button, Stack, Typography } from "@mui/material";
import { EventCardList } from "../components/EventCardList";
import { useNavigate } from "react-router";

export const Home = () => {
  const navigate = useNavigate();
  const handleCreateEvent = () => {
    navigate("/event/create");
  };
  return (
    <Box>
      <Stack
        direction={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        spacing={2}
        padding={4}
      >
        <Typography variant="body1">10 Events</Typography>
        <Button variant="contained" color="primary" onClick={handleCreateEvent}>
          Create Event
        </Button>
      </Stack>
      <EventCardList />
    </Box>
  );
};
