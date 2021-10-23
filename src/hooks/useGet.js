import axios from "axios";
import { useState, useEffect } from "react";

export const UseGet = () => {
  const [label, setLabel] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/gettags`)
      .then((res) => {
        setLabel(
          res.data.itemList.map((tag) => ({
            tag: tag.tag,
            isActive: tag.isActive,
          }))
        );
      })
      .catch((err) => console.log(err));
  }, []);
  return label;
};
