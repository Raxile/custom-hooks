export const getArray = (length) =>
  Array.from({ length }, (_, id) => {
    return { id };
  });

export const getLoadingData = () => {
  return {
    products: getArray(20),
  };
};
