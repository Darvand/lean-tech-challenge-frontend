import { Stack } from "@mui/material";
import { EventCard } from "./EventCard";
import { useListEventsQuery } from "../services/event.service";
import { useEffect } from "react";

export const EventCardList = () => {
  const {
    data: pagination,
    isLoading,
    isError,
    refetch,
  } = useListEventsQuery({ limit: 10, page: 1 });
  useEffect(() => {
    refetch();
  }, [refetch]);
  if (isError) return <div>Unable to load events</div>;
  return (
    <Stack alignItems="center" spacing={3} padding={4}>
      {!isLoading &&
        pagination?.items.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
    </Stack>
  );
};
