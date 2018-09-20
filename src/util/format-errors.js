import pick from "lodash/pick";

export default errors => {
  return Object.keys(errors).reduce(
    (acc, error) => ({
      ...acc,
      [error]: pick(errors[error], ["message", "name"])
    }),
    {}
  );
};
