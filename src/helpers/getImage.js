const getImage = require.context("../assets/img", true);
export const iconImage = (image) => {
  let img = getImage(image);
  console.log("img", img);
  return img.default;
};
