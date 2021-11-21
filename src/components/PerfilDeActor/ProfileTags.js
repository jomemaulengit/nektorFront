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
import { DTag } from "../Tagfilter/DTag";

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

export const ProfileTags = () => {
  const tags = useSelector((state) => state.tags.array);
  let initialTagState = tags.map((tag, key) => <DTag tag={tag} key={key} />);
  const [inputArray, setinputArray] = useState(["!"]);
  const [input, setinput] = useState("");
  const [tagState, setTagState] = useState(initialTagState);
  const ref = useRef();

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
  };

  return (
    <Box>
      <Grid>
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
                top: "10px",
                position: "relative",
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
        </CardContent>
      </Grid>
    </Box>
  );
};
