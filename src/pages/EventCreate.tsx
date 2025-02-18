import {
  Box,
  Button,
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
import { useEffect, useState } from "react";
import { useCreateEventMutation } from "../services/event.service";
import { EventCreation } from "../models/event-creation.model";
import { useNavigate } from "react-router";

export const EventCreate = () => {
  const [title, setTitle] = useState("Event name");
  const [description, setDescription] = useState(
    "An expected longer description"
  );
  const [startDate, setStartDate] = useState("2025-01-01");
  const [endDate, setEndDate] = useState("2025-05-01");
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [type, setType] = useState("vip");
  const [price, setPrice] = useState(2000);
  const [available, setAvailable] = useState(100);
  const [purchaseLimit, setPurchaseLimit] = useState(2);
  const [benefits, setBenefits] = useState("Privileged access");
  const [createEvent, result] = useCreateEventMutation();
  const navigate = useNavigate();
  const handleCreateEvent = async () => {
    const event: EventCreation = {
      title,
      description,
      startDate,
      endDate,
      location: {
        latitude,
        longitude,
      },
      tickets: [
        {
          type,
          price,
          available,
          purchaseLimit,
          benefits: [benefits],
        },
      ],
    };
    await createEvent(event);
  };
  useEffect(() => {
    if (result.data) {
      navigate(`/event/${result.data.id}`);
    }
  }, [navigate, result.data]);
  return (
    <form noValidate autoComplete="off">
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
                    label="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
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
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </Grid2>
                <Grid2 size={6}>
                  <TextField
                    required
                    label="Start date"
                    type="date"
                    fullWidth
                    slotProps={{ inputLabel: { shrink: true } }}
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                  />
                </Grid2>
                <Grid2 size={6}>
                  <TextField
                    required
                    label="End date"
                    type="date"
                    fullWidth
                    slotProps={{ inputLabel: { shrink: true } }}
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
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
                    value={latitude}
                    onChange={(e) => setLatitude(+e.target.value)}
                  />
                </Grid2>
                <Grid2 size={6}>
                  <TextField
                    required
                    label="longitude"
                    fullWidth
                    variant="standard"
                    type="number"
                    value={longitude}
                    onChange={(e) => setLongitude(+e.target.value)}
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
                    value={price}
                    onChange={(e) => setPrice(+e.target.value)}
                  />
                </Grid2>
                <Grid2 size={4}>
                  <TextField
                    required
                    label="Available"
                    fullWidth
                    variant="standard"
                    type="number"
                    value={available}
                    onChange={(e) => setAvailable(+e.target.value)}
                  />
                </Grid2>
                <Grid2 size={4}>
                  <TextField
                    required
                    label="Purchase limit"
                    fullWidth
                    variant="standard"
                    type="number"
                    value={purchaseLimit}
                    onChange={(e) => setPurchaseLimit(+e.target.value)}
                  />
                </Grid2>
                <Grid2 size={12}>
                  <FormControl fullWidth>
                    <InputLabel>Type</InputLabel>
                    <Select
                      value={type}
                      label="Type"
                      onChange={(e) => setType(e.target.value)}
                    >
                      <MenuItem value={"vip"}>VIP</MenuItem>
                      <MenuItem value={"general-admission"}>
                        General admission
                      </MenuItem>
                      <MenuItem value={"early-bird"}>Early bird</MenuItem>
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
                  value={benefits}
                  onChange={(e) => setBenefits(e.target.value)}
                />
              </Stack>
            </Stack>
          </Paper>
          <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleCreateEvent}
            >
              Create
            </Button>
          </Box>
        </Container>
      </>
    </form>
  );
};
