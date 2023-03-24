export const setMaterialWidth = (value = "") => {
  return (Number(value.match(/\d/g)?.join("")) - 1) + "%";
};
