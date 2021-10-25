import React from "react";
import Styled from "styled-components";
import {
  Card,
  CardMedia,
  Typography,
  CardActionArea,
  IconButton,
  CardContent,
} from "@material-ui/core";

import { FaStar } from "react-icons/fa";
import { HiShare } from "react-icons/hi";
import { IoMdText } from "react-icons/io";
const CustomImg = Styled(CardMedia)`
    height: 180px;
`;

const CustomBox = Styled(Card)`
    cursor:pointer;

    &:hover{
        color:gray;
    }
`;

export const Perfil = (data) => {
  const { tumnail, age, name } = data.props;
  return (
    <>
      <CustomBox elevation={6} sx={{ maxWidth: 200 }}>
        <CardActionArea>
          <CustomImg component="img" image={tumnail} alt="green iguana" />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {name}
            </Typography>
            <Typography variant="body2" component="ul">
              {age}
            </Typography>
          </CardContent>
        </CardActionArea>
        <IconButton aria-label="add to favorites">
          <FaStar />
        </IconButton>
        <IconButton aria-label="share">
          <HiShare />
        </IconButton>
        <IconButton aria-label="share">
          <IoMdText />
        </IconButton>
      </CustomBox>
    </>
  );
};

export default Perfil;
