import { Chip, Stack } from "@mui/material";
import { RowValue } from "./RowValue";

export const TicketDetails = () => {
  return (
    <Stack direction="column" spacing={1} alignItems={"center"} width={1}>
      <RowValue label="Type" value="VIP" />
      <RowValue label="Price" value="$100" />
      <RowValue label="Available" value="100" />
      <RowValue label="Purchase Limit" value="5" />
      <Stack direction="row" spacing={1}>
        <Chip label="Front row seating" color="secondary" />
      </Stack>
    </Stack>
  );
};
