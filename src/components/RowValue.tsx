import { Stack, Typography } from "@mui/material";

interface RowValueProps {
  label: string;
  value: string | number;
}

export const RowValue = ({ label, value }: RowValueProps) => {
  return (
    <Stack direction="row" sx={{ width: 400 }} justifyContent={"space-between"}>
      <Typography variant="body1" color="textSecondary">
        {label}
      </Typography>
      <Typography variant="body1">{value}</Typography>
    </Stack>
  );
};
