import React from "react";
import { Avatar } from "@material-ui/core";
import styled from "styled-components";

const StyledAvatar = styled(Avatar)`
  && {
    position: absolute;
    width: 80px;
    height: 80px;
    top: 20px;
    right: 25px;
  }
`;

export const MainAvatar = (prop) => {
  const user = prop.prop;
  return (
    <>
      <StyledAvatar
        alt={user.nombre}
        src={user.nombre}
        question={user.nombre}
      />
    </>
  );
};
