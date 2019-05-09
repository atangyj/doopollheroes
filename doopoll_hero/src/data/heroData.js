const importAll = r => {
  return r.keys().map(r);
};

export const MASKS = importAll(
  require.context("../assets/masks/", false, /\.(png|jpe?g|svg)$/)
);

export const ANIMALS = importAll(
  require.context("../assets/animals/", false, /\.(png|jpe?g|svg)$/)
);

export const COLOURS = ["#FFEBE9", "#021C4B", "#000"];
