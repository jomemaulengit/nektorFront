import {
  Button,
  Card,
  CardContent,
  Modal,
  Typography,
  TextField,
  Grid,
  InputLabel,
  Slider,
  Box,
} from "@material-ui/core";
import { SpeedDialIcon } from "@material-ui/lab";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { updateTags } from "../../redux/tagState";
import { DTag } from "./DTag";

const CustomModal = styled(Card)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  background-color: whitesmoke;
  box-shadow: 24;

  @media (max-width: 600px) {
    width: 100vw;
    left: 50%;
  }
`;

export const OpenFilter = (data) => {
  let initialTagState = data.data[0].map((tag, key) => (
    <DTag tag={tag} key={key} />
  ));
  const [age, setAge] = useState([18, 100]);

  const handleChange = (event, newValue) => {
    setAge(newValue);
  };

  const [tagState, setTagState] = useState(initialTagState);
  const [input, setinput] = useState("");

  const dispatch = useDispatch();
  const handleOpen = () => {
    setOpen(true);
    setTagState(initialTagState);
  };
  const handleClose = () => {
    setOpen(false);
    dispatch(updateTags(data.data[0]));
  };
  const onInput = (i, limit) => {
    i.target.value = i.target.value.toString().slice(0, limit);
    data.data[0].forEach((item) => {
      if (!item.tag.includes(i.target.value)) {
        item.color = "default";
      } else {
        item.color = "secondary";
      }
    });
    setinput(i.target.value);
    setTagState(initialTagState);
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
              <Box>
                <TextField
                  label="caracteristicas"
                  color="primary"
                  variant="outlined"
                  defaultValue={input}
                  onInput={(i) => onInput(i, 20)}
                  style={{ left: "20px" }}
                />
                <Button
                  variant="contained"
                  color="secondary"
                  style={{
                    borderRadius: "24px",
                    top: "25px",
                    position: "absolute",
                  }}
                >
                  <SpeedDialIcon />
                </Button>
              </Box>
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
              <InputLabel>Edades</InputLabel>
              <Slider
                value={age}
                onChange={handleChange}
                getAriaValueText={() => age}
                valueLabelDisplay="auto"
                getAriaLabel={() => `rango de edades`}
                defaultValue={[20, 40]}
              />
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
        </Grid>
      </Modal>
    </>
  );
};
