import {
  Button,
  Card,
  CardContent,
  Modal,
  Typography,
  TextField,
  Grid,
  Select,
  Box,
  InputLabel,
  MenuItem,
} from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { updateTags } from "../../redux/tagState";
import { DTag } from "./DTag";

const CustomModal = styled(Card)`
  position: absolute;
  top: 50%;
  left: 35%;
  transform: translate(-50%, -50%);
  width: 400px;
  background-color: whitesmoke;
  box-shadow: 24;

  @media (max-width: 600px) {
    width: 300px;
    left: 50%;
  }
`;
const CustomModalDos = styled(Card)`
  position: absolute;
  top: 50%;
  left: 65%;
  transform: translate(-50%, -50%);
  width: 400px;
  background-color: whitesmoke;
  box-shadow: 24;

  @media (max-width: 600px) {
    width: 300px;
    left: 50%;
  }
`;

export const OpenFilter = (data) => {
  let initialTagState = data.data.map((tag, key) => (
    <DTag tag={tag} key={key} />
  ));
  const [tagState, setTagState] = useState(initialTagState);
  const [input, setinput] = useState("");

  const dispatch = useDispatch();
  const handleOpen = () => {
    setOpen(true);
    setTagState(initialTagState);
  };
  const handleClose = () => {
    setOpen(false);
    dispatch(updateTags(data.data));
  };
  const onInput = (i, limit) => {
    setTagState(initialTagState);
    i.target.value = i.target.value.toString().slice(0, limit);
    data.data.forEach((item) => {
      if (!item.tag.includes(i.target.value)) {
        item.color = "default";
      } else {
        item.color = "primary";
      }
    });
    setinput(i.target.value);
  };

  const [open, setOpen] = useState(false);
  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          handleOpen();
        }}
      >
        Filtro
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Grid>
          <CustomModal elevation={6}>
            <CardContent>
              <br />
              <TextField
                label="caracteristicas"
                color="primary"
                variant="outlined"
                defaultValue={input}
                onInput={(i) => onInput(i, 20)}
              />
              <br />
              <br />
              <Typography
                id="modal-modal-description"
                sx={{ mt: 2 }}
                component="span"
              >
                {tagState}
              </Typography>
              <br />
              <br />
              <Button
                variant="contained"
                color="secondary"
                onClick={() => {
                  handleClose();
                }}
              >
                Filtrar
              </Button>
            </CardContent>
          </CustomModal>

          <CustomModalDos elevation={6}>
            <CardContent>
              <br />
              <br />
              <Box>
                <InputLabel>Edad</InputLabel>
                <Select variant="outlined" style={{ width: "180px" }} autoWidth>
                  <MenuItem value={[18]}>todas las edades</MenuItem>
                  <MenuItem value={[18, 22]}>18-22</MenuItem>
                  <MenuItem value={[20, 25]}>18-22</MenuItem>
                  <MenuItem value={[20, 25]}>20-25</MenuItem>
                  <MenuItem value={[25, 30]}>25-30</MenuItem>
                  <MenuItem value={[30, 35]}>30-35</MenuItem>
                  <MenuItem value={[35, 40]}>35-40</MenuItem>
                  <MenuItem value={[40, 50]}>40-50</MenuItem>
                  <MenuItem value={[50, 60]}>50-60</MenuItem>
                  <MenuItem value={[60, 70]}>60-70</MenuItem>
                  <MenuItem value={[70, 80]}>70-80</MenuItem>
                  <MenuItem value={[80]}>80+</MenuItem>
                </Select>
              </Box>
              <br />
              <br />
              <Typography
                id="modal-modal-description"
                sx={{ mt: 2 }}
                component="span"
              >
                <InputLabel>Favoritos</InputLabel>
                <Rating size="large" name="popularity" />
              </Typography>
              <br />
              <br />
            </CardContent>
          </CustomModalDos>
        </Grid>
      </Modal>
    </>
  );
};
