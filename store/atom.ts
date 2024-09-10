import { atom } from "recoil";

export const colorState = atom({
  key: "colorstate",
  default: "#fff",
});

export const lineWidhtState = atom({
  key: "lineWidth",
  default: 5,
});
