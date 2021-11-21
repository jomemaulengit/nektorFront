import {
  Button,
  CardContent,
  Typography,
  TextField,
  Grid,
  Box,
} from "@material-ui/core";
import { SpeedDialIcon } from "@material-ui/lab";
import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { DTag } from "../Tagfilter/DTag";

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
