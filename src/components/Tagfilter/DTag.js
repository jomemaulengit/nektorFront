import { Chip } from "@material-ui/core";
import React from "react";
import { useState } from "react";

export const DTag = (tag) => {
  const label = tag.tag.tag;
  const [selected, setselected] = useState("primary");
  const [active, setActive] = useState(true);
  const handleSelected = () => {
    if (active === true) {
      setActive(false);
      setselected("default");
    } else {
      setActive(true);
      setselected("primary");
    }
  };
  return (
    <>
      {" "}
      <Chip
        key={1}
        label={label}
        clickable
        color={selected}
        onClick={handleSelected}
      />{" "}
    </>
  );
};
