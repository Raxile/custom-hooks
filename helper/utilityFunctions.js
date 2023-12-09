export const getArray = (length) =>
  Array.from({ length }, (_, id) => {
    return { id };
  });
