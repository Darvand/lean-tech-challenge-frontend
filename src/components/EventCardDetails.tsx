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

export const EventCardDetails = () => {
  return (
    <Card variant="elevation">
      <CardHeader title="Event Detail" sx={{ textAlign: "center" }} />
      <CardContent>
        <Stack direction="column" spacing={1} alignItems={"center"}>
          <Chip label="Draft" color="info" sx={{ minWidth: 64 }} />
          <RowValue label="Name" value="Event 1" />
          <RowValue label="Description" value="Description about the event" />
          <RowValue label="Start date" value="May 12" />
          <RowValue label="End date" value="May 15" />
          <RowValue label="Tickets" value="45" />
        </Stack>
      </CardContent>
      <CardActions>
        <Stack direction="row" justifyContent="center" spacing={2} width={1}>
          <Button variant="contained" startIcon={<Publish />}>
            <Typography variant="body1">Publish</Typography>
          </Button>
          <Button variant="contained" color="error" startIcon={<Delete />}>
            <Typography variant="body1">Delete</Typography>
          </Button>
        </Stack>
      </CardActions>
    </Card>
  );
};
