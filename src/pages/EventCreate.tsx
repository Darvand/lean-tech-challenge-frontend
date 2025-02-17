import {
  Box,
  Container,
  Divider,
  FormControl,
  Grid2,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

export const EventCreate = () => {
  return (
    <form>
      <>
        <Container component={"main"} maxWidth={"sm"} sx={{ mb: 4 }}>
          <Paper
            variant="outlined"
            sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
          >
            <Typography component={"h1"} variant={"h4"} align={"center"}>
              Create event
            </Typography>
            <Box sx={{ my: 3 }}>
              <Grid2 container spacing={3}>
                <Grid2 size={12}>
                  <TextField
                    required
                    label="Name"
                    fullWidth
                    variant="standard"
                  />
                </Grid2>
                <Grid2 size={12}>
                  <TextField
                    required
                    label="Description"
                    fullWidth
                    variant="standard"
                  />
                </Grid2>
                <Grid2 size={6}>
                  <TextField
                    required
                    label="Start date"
                    type="date"
                    fullWidth
                    slotProps={{ inputLabel: { shrink: true } }}
                  />
                </Grid2>
                <Grid2 size={6}>
                  <TextField
                    required
                    label="End date"
                    type="date"
                    fullWidth
                    slotProps={{ inputLabel: { shrink: true } }}
                  />
                </Grid2>
              </Grid2>
            </Box>
            <Box sx={{ my: 3 }}>
              <Typography
                component={"h2"}
                variant={"h5"}
                align={"center"}
                color="textSecondary"
              >
                Location
              </Typography>
              <Grid2 container spacing={3}>
                <Grid2 size={6}>
                  <TextField
                    required
                    label="Latitude"
                    fullWidth
                    variant="standard"
                    type="number"
                  />
                </Grid2>
                <Grid2 size={6}>
                  <TextField
                    required
                    label="longitude"
                    fullWidth
                    variant="standard"
                    type="number"
                  />
                </Grid2>
              </Grid2>
            </Box>
            <Box sx={{ my: 3 }}>
              <Typography component={"h2"} variant={"h5"} align={"center"}>
                Tickets
              </Typography>
              <Divider sx={{ padding: 2 }} />
              <Grid2 container spacing={3}>
                <Grid2 size={4}>
                  <TextField
                    required
                    label="Price"
                    fullWidth
                    variant="standard"
                    type="number"
                  />
                </Grid2>
                <Grid2 size={4}>
                  <TextField
                    required
                    label="Available"
                    fullWidth
                    variant="standard"
                    type="number"
                  />
                </Grid2>
                <Grid2 size={4}>
                  <TextField
                    required
                    label="Purchase limit"
                    fullWidth
                    variant="standard"
                    type="number"
                  />
                </Grid2>
                <Grid2 size={12}>
                  <FormControl fullWidth>
                    <InputLabel>Type</InputLabel>
                    <Select value={10} label="Type">
                      <MenuItem value={10}>VIP</MenuItem>
                      <MenuItem value={20}>Regular</MenuItem>
                      <MenuItem value={30}>Free</MenuItem>
                    </Select>
                  </FormControl>
                </Grid2>
              </Grid2>
            </Box>
            <Stack direction={"row"} alignItems={"center"} spacing={3}>
              <Typography
                component={"h2"}
                variant={"h5"}
                align={"center"}
                color="textSecondary"
              >
                Benefits
              </Typography>
              <Stack spacing={1} width={"80%"}>
                <TextField
                  required
                  label="Benefit"
                  fullWidth
                  variant="standard"
                />
                <TextField
                  required
                  label="Benefit"
                  fullWidth
                  variant="standard"
                />
              </Stack>
            </Stack>
          </Paper>
        </Container>
      </>
    </form>
  );
};
