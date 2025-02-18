import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Stack,
  Typography,
} from "@mui/material";
import { EventCardDetails } from "../components/EventCardDetails";
import { TicketDetails } from "../components/TicketDetails";
import { useNavigate, useParams } from "react-router";
import {
  useDeleteEventMutation,
  useGetEventByIdQuery,
  useUpdateEventStatusMutation,
} from "../services/event.service";

export const EventDetail = () => {
  const params = useParams<{ id: string }>();
  const {
    data: event,
    isLoading,
    isError,
    refetch,
  } = useGetEventByIdQuery(params.id!);
  const [updateStatus] = useUpdateEventStatusMutation();
  const [deleteEvent] = useDeleteEventMutation();
  const navigate = useNavigate();
  const handlePublish = async () => {
    if (!event) return;
    await updateStatus({ id: event.id, status: "published" });
    refetch();
  };
  const handleDelete = async () => {
    if (!event) return;
    await deleteEvent(event.id);
    navigate(`/`, { replace: true });
  };
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (!event || isError) {
    return <div>Error...</div>;
  }
  return (
    <Stack sx={{ padding: 4 }} alignItems={"center"} spacing={2}>
      <Box width={"80%"}>
        <EventCardDetails
          event={event}
          onDelete={() => handleDelete()}
          onPublish={() => handlePublish()}
        />
      </Box>
      <Box width={1}>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography variant="body1">Tickets</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {event.tickets.map((ticket) => (
              <TicketDetails key={ticket.id} ticket={ticket} />
            ))}
          </AccordionDetails>
        </Accordion>
      </Box>
    </Stack>
  );
};
