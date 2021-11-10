export const pseudonimusValidator = (pseudonimus) => {
  let value = /^[a-zA-Z]{3,20}$/i.test(pseudonimus)
    ? {
        pseudonimus: {
          message: "ok",
          params: {
            value: true,
          },
        },
      }
    : {
        psudonimus: {
          message: "Pseudonimus must be between 3 and 20 characters",
          params: {
            value: false,
          },
        },
      };
  console.log(value);
};
