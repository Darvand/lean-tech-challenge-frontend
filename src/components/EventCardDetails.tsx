import { Delete, Publish } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Chip,
  Stack,
  Typography,
} from "@mui/material";
import { RowValue } from "./RowValue";
import { EventDetail } from "../models/event-detail.model";

interface EventCardDetailsProps {
  event: EventDetail;
  onPublish: () => void;
  onDelete: () => void;
}
export const EventCardDetails = ({
  event,
  onPublish,
  onDelete,
}: EventCardDetailsProps) => {
  return (
    <Card variant="elevation">
      <CardHeader title="Event Detail" sx={{ textAlign: "center" }} />
      <CardContent>
        <Stack direction="column" spacing={1} alignItems={"center"}>
          <Chip label={event.status} color="info" sx={{ minWidth: 64 }} />
          <RowValue label="Title" value={event.title} />
          <RowValue label="Description" value={event.description} />
          <RowValue label="Start date" value={event.startDate} />
          <RowValue label="End date" value={event.endDate} />
        </Stack>
      </CardContent>
      <CardActions>
        <Stack direction="row" justifyContent="center" spacing={2} width={1}>
          <Button
            variant="contained"
            startIcon={<Publish />}
            onClick={onPublish}
          >
            <Typography variant="body1">Publish</Typography>
          </Button>
          <Button
            variant="contained"
            color="error"
            startIcon={<Delete />}
            onClick={onDelete}
          >
            <Typography variant="body1">Delete</Typography>
          </Button>
        </Stack>
      </CardActions>
    </Card>
  );
};
