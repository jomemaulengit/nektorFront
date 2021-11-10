export const wordsValidator = (prop) => {
  let value = /^[a-zA-Z]{3,20}$/i.test(prop)
    ? {
        res: {
          params: {
            flag: true,
            value: prop,
          },
        },
      }
    : {
        res: {
          params: {
            flag: false,
            value: prop,
          },
        },
      };
  return value;
};

export const emailValidator = (prop) => {
  let value =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/i.test(
      prop
    )
      ? {
          res: {
            params: {
              flag: true,
              value: prop,
            },
          },
        }
      : {
          res: {
            params: {
              flag: false,
              value: prop,
            },
          },
        };
  return value;
};
