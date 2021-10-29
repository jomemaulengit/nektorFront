import React from "react";
import Styled from "styled-components";
import {
  Card,
  CardMedia,
  Typography,
  CardActionArea,
  IconButton,
  CardContent,
  ImageListItem,
} from "@material-ui/core";

import { FaStar } from "react-icons/fa";
import { HiShare } from "react-icons/hi";
import { IoMdText } from "react-icons/io";
import { Box, typography } from "@mui/system";

const Title = Styled(Typography)`
    color: #fff;
    position: absolute;
    margin-top: -50px;
    margin-left: 10px;
`;
const IMG = Styled.img`
    width: inherit;
    height: inherit;
    @media (max-width: 768px) {
      width: inherit;
      height: inherit;
    }
    `;

const CustomBox = Styled(Card)`
    border-radius: 12px;
    cursor:pointer;
    width: 16vw;
    height: 20vw;

    &:hover{
        color:gray;
    }
    @media (max-width: 768px) {
        width: 42vw;
        height: 51vw;
    }
`;

export const Perfil = (data) => {
  const { tumnail, age, name } = data.props;
  return (
    <Box>
      <CustomBox elevation={6}>
        <IMG src={tumnail} />
        <Title variant="h6">{name}</Title>
      </CustomBox>
    </Box>
  );
};

export default Perfil;
