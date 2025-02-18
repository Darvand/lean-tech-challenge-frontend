import {
  Card,
  CardActionArea,
  CardContent,
  Chip,
  Stack,
  Typography,
} from "@mui/material";
import EventRoundedIcon from "@mui/icons-material/EventRounded";
import { useNavigate } from "react-router";
import { Event } from "../models/event.model";

export const EventCard = ({ event }: { event: Event }) => {
  const navigate = useNavigate();
  const handleCardClick = () => {
    navigate(`/event/${event.id}`);
  };
  return (
    <Card variant="elevation" sx={{ width: 1 }}>
      <CardActionArea onClick={() => handleCardClick()}>
        <CardContent sx={{ padding: 4 }}>
          <Stack
            direction="row"
            spacing={1}
            justifyContent="space-between"
            alignItems="center"
          >
            <Stack direction="row" spacing={3} alignItems="center">
              <EventRoundedIcon sx={{ fontSize: 48 }} color="primary" />
              <Stack direction="column" spacing={2}>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Typography variant="h5">{event.title}</Typography>
                  <Chip
                    label={event.status}
                    color="info"
                    sx={{ minWidth: 64 }}
                  />
                </Stack>
                <Typography variant="subtitle1" color="textSecondary">
                  {event.description}
                </Typography>
              </Stack>
            </Stack>
            <Stack direction="column" spacing={2}>
              <Typography variant="body1">{event.date}</Typography>
              <Stack direction="row" spacing={1} alignItems="center">
                <Typography variant="body1" color="textSecondary">
                  Tickets:
                </Typography>
                <Chip label={event.ticketsAvailable} />
              </Stack>
            </Stack>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
