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

export const EventCard = () => {
  const navigate = useNavigate();
  const handleCardClick = () => {
    navigate("/event/1");
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
                  <Typography variant="h5">Event 1</Typography>
                  <Chip label="Draft" color="info" sx={{ minWidth: 64 }} />
                </Stack>
                <Typography variant="subtitle1" color="textSecondary">
                  Description about the event
                </Typography>
              </Stack>
            </Stack>
            <Stack direction="column" spacing={2}>
              <Typography variant="body1">May 12 - May 25</Typography>
              <Stack direction="row" spacing={1} alignItems="center">
                <Typography variant="body1" color="textSecondary">
                  Tickets:
                </Typography>
                <Chip label="45" />
              </Stack>
            </Stack>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
