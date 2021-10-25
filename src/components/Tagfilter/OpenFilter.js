import {
  Button,
  Card,
  CardContent,
  InputBase,
  Modal,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
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
  const dispatch = useDispatch();
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    dispatch(updateTags(data.data));
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
            <Typography
              id="modal-modal-description"
              sx={{ mt: 2 }}
              component="span"
            >
              {data.data.map((tag, key) => (
                <DTag tag={tag} key={key} />
              ))}
            </Typography>
            <br />
            <br />
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                handleClose();
              }}
            >
              Filtrar
            </Button>
            <InputBase />
            <FaSearch/>
          </CardContent>
        </CustomModal>
      </Modal>
    </>
  );
};
