import {
  Button,
  Card,
  CardContent,
  Modal,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import styled from "styled-components";
import { DTag } from "./DTag";

const CustomModal = styled(Card)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400;
  background-color: whitesmoke;
  box-shadow: 24;
`;

export const OpenFilter = (data) => {
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
          </CardContent>
        </CustomModal>
      </Modal>
    </>
  );
};
