export const setMaterialWidth = (value = "") => {
  return value.match(/\d/g).join("") - 1 + "%";
};
