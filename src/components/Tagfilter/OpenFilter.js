import {
  Button,
  Card,
  CardContent,
  Modal,
  Typography,
  TextField,
} from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { updateTags } from "../../redux/tagState";
import { DTag } from "./DTag";

const CustomModal = styled(Card)`
  position: absolute;
  top: 50%;
  left: 20%;
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
  const [input, setinput] = useState("")

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
      }else{
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
        <CustomModal elevation={6}>
          <CardContent>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Elejir por caracteristicas
            </Typography>
            <br />
            <TextField
              label="buscar"
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
      </Modal>
    </>
  );
};
