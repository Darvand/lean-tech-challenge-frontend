import { Stack } from "@mui/material";
import { EventCard } from "./EventCard";

export const EventCardList = () => {
  return (
    <Stack alignItems="center" spacing={3} padding={4}>
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
    </Stack>
  );
};
