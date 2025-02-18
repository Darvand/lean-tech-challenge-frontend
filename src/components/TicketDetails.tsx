import { Chip, Stack } from "@mui/material";
import { RowValue } from "./RowValue";
import { Ticket } from "../models/ticket.model";

export const TicketDetails = ({ ticket }: { ticket: Ticket }) => {
  return (
    <Stack direction="column" spacing={1} alignItems={"center"} width={1}>
      <RowValue label="Type" value={ticket.type} />
      <RowValue label="Price" value={ticket.price} />
      <RowValue label="Available" value={ticket.available} />
      <RowValue label="Purchase Limit" value={ticket.purchaseLimit} />
      <Stack direction="row" spacing={1}>
        {ticket.benefits.map((benefit, index) => (
          <Chip key={index} label={benefit} color="primary" />
        ))}
      </Stack>
    </Stack>
  );
};
