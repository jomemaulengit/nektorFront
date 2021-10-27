import { Chip } from "@material-ui/core";
import React, { useEffect } from "react";
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

  const refresh = () => {
    if (active === true && label.color === "default") {
      handleSelected();
      console.clear();
    }
    if (active === false && label.color === "primary") {
      handleSelected();
      console.clear();
    }
  };
  useEffect(() => {
    refresh();
  });
  console.log(`${label.color}: ${active}`);

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
