import { Chip } from "@material-ui/core";
import React from "react";
import { useState } from "react";

export const DTag = (tag) => {
  let label = tag.tag;
  const [active, setActive] = useState(() => {
    if (label.color === "primary") {
      return true;
    } else {
      return false;
    }
  });
  const handleSelected = () => {
    if (active === true) {
      setActive(!active);
      label.color = "default";
    } else {
      setActive(!active);
      label.color = "primary";
    }
  };
  console.log(active);
  return (
    <>
      {" "}
      <Chip
        key={1}
        label={label.tag}
        clickable
        color={label.color}
        onClick={handleSelected}
      />{" "}
    </>
  );
};
