import Modal from "@mui/material/Modal";
import {
  Alert,
  Button,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70%",
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "10px",
  p: 4,
};

const AppointmentModal = ({ open, handleClose }) => {
  const [age, setAge] = React.useState("");
  const [success, setSuccess] = React.useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const categories = ["medicine", "orthopedics", "surgery"];

  const handleSubmit = () => {
    setSuccess(true)
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Grid sx={style}>
          {success && (
            <Alert severity="success" onClose={() => setSuccess(false)}>
              This Alert displays the default close icon.
            </Alert>
          )}
          <Grid container spacing={3}>
            <Grid item xs={12} lg={6}>
              <TextField
                fullWidth
                variant="filled"
                label="full name"
              ></TextField>
            </Grid>
            <Grid item xs={12} lg={6}>
              <TextField fullWidth variant="filled" label="Email"></TextField>
            </Grid>
            <Grid item xs={12} lg={6}>
              <TextField fullWidth variant="filled" label="Email"></TextField>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Select
                fullWidth
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Age"
                value={age}
                onChange={handleChange}
              >
                {categories?.map((c) => (
                  <MenuItem key={c} value={c}>
                    {c}
                  </MenuItem>
                ))}
                {/* <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem> */}
              </Select>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Button onClick={handleSubmit}>Book Now</Button>
            </Grid>
          </Grid>
        </Grid>
      </Modal>
    </div>
  );
};

export default AppointmentModal;
