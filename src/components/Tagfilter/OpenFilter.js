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
import { Tooltip } from "@mui/material";
import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { updateTags } from "../../redux/tagState";
import ProfileGrid from "../MicroPerfil/ProfileGrid";
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
  let ProfileList = data.data;
  const tags = useSelector((state) => state.tags.array);
  let initialTagState = tags.map((tag, key) => <DTag tag={tag} key={key} />);
  const [profileGrid, setProfileGrid] = useState(
    <ProfileGrid data={ProfileList} />
  );
  const [inputArray, setinputArray] = useState(["!"]);
  const [input, setinput] = useState("");
  const [age, setAge] = useState([18, 100]);
  const [tagState, setTagState] = useState(initialTagState);
  const [open, setOpen] = useState(false);
  const ref = useRef();

  const handleChange = (event, newValue) => {
    setAge(newValue);
  };
  const dispatch = useDispatch();
  const handleOpen = () => {
    setOpen(true);
    setTagState(initialTagState);
  };
  const handleCloseALL = () => {
    setOpen(false);
    dispatch(updateTags(tags));
    let filterTags = tags
      .filter((tag) => tag.color.localeCompare("primary") === 0)
      .map((tag) => tag.tag);
    ProfileList = ProfileList.filter(
      (profile) =>
        parseInt(profile.age) >= age[0] &&
        parseInt(profile.age) <= age[1] &&
        filterTags.every((tag) => profile.tags.includes(tag))
    );
    setProfileGrid(<ProfileGrid data={ProfileList} />);
  };
  const handleCloseSOME = () => {
    setOpen(false);
    dispatch(updateTags(tags));
    let filterTags = tags
      .filter((tag) => tag.color.localeCompare("primary") === 0)
      .map((tag) => tag.tag);
    ProfileList = ProfileList.filter(
      (profile) =>
        parseInt(profile.age) >= age[0] &&
        parseInt(profile.age) <= age[1] &&
        filterTags.some((tag) => profile.tags.includes(tag))
    );
    setProfileGrid(<ProfileGrid data={ProfileList} />);
  };
  const onInput = (i, limit) => {
    i.target.value = i.target.value.toString().slice(0, limit);
    tags.forEach((item) => {
      if (!item.tag.includes(i.target.value)) {
        item.color = "default";
      } else {
        item.color = "primary";
      }
    });
    setinput(i.target.value);
    setTagState(initialTagState);
  };

  const addTag = () => {
    setinputArray([...new Set(inputArray.concat(input))].filter(Boolean));
    inputArray.forEach((inp) => {
      tags.forEach((item) => {
        if (item.tag.includes(inp)) {
          item.color = "primary";
        }
      });
    });
    setTagState(initialTagState);
    console.log(ref);
  };

  return (
    <Box>
      <Button
        style={{ left: "18.2%", transform: "translateX(-50%)" }}
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
        onClose={handleCloseSOME}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Grid>
          <CustomModal elevation={6}>
            <CardContent>
              <Box>
                <TextField
                  ref={ref}
                  label="caracteristicas"
                  color="primary"
                  variant="outlined"
                  defaultValue=""
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
                  onClick={() => {
                    addTag();
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
              <Tooltip
                placement="top-start"
                arrow
                title="muestra solo los que cumplan todas las caracteristicas"
              >
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => {
                    handleCloseALL();
                  }}
                >
                  Filtrar todos
                </Button>
              </Tooltip>
              <Tooltip
                placement="top-start"
                arrow
                title="muestra los que cumplan alguna de lascaracteristicas"
              >
                <Button
                  variant="contained"
                  color="secondary"
                  style={{ marginLeft: "40px" }}
                  onClick={() => {
                    handleCloseSOME();
                  }}
                >
                  Filtrar algunos
                </Button>
              </Tooltip>
            </CardContent>
          </CustomModal>
        </Grid>
      </Modal>
      {profileGrid}
    </Box>
  );
};
