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

export const EventDetail = () => {
  return (
    <Stack sx={{ padding: 4 }} alignItems={"center"} spacing={2}>
      <Box width={"80%"}>
        <EventCardDetails />
      </Box>
      <Box width={1}>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography variant="body1">Tickets</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <TicketDetails />
          </AccordionDetails>
        </Accordion>
      </Box>
    </Stack>
  );
};
