"use client";
import { colorState, lineWidhtState } from "@/store/atom";
import React from "react";
import { useSetRecoilState } from "recoil";

const strokes = [
  {
    name: "normal",
    value: 5,
  },
  {
    name: "bold",
    value: 12,
  },
  {
    name: "semibold",
    value: 8,
  },
  {
    name: "thin",
    value: 3,
  },
];
const color = [
  {
    name: "red",
    hex: "#E00C0C",
  },
  {
    name: "green",
    hex: "#00FF50",
  },

  {
    name: "purple",
    hex: "#AC1AB9",
  },
];
export const SideBar = () => {
  const setColor = useSetRecoilState(colorState);
  const setLineWidth = useSetRecoilState(lineWidhtState);

  return (
    <div className="  m-7 absolute z-40 w-1/4 px-3 py-3 rounded-lg translate-y-1/2 bg-[#232329]">
      <div className="stroke py-2">
        <h3>Stroke</h3>
        <div className=" flex gap-5">
          {strokes.map((item, index) => (
            <button
              onClick={() => {
                setLineWidth(item.value);
              }}
              className=" rounded-lg text-sm px-2 py-1 text-center bg-neutral-700"
              key={index}
            >
              {item.name}
            </button>
          ))}
        </div>
        <div className=" py-2 stroke-color ">
          <h3>Color</h3>
          <div className=" flex gap-5">
            {color.map((item, index) => (
              <button
                onClick={() => {
                  setColor(item.hex);
                }}
                key={index}
                className={` h-8 w-8  rounded-lg  bg-[${item.hex}]`}
              ></button>
            ))}
          </div>
          <div className="opacity py-2">
            <h3>Opacity</h3>
            <input className=" w-full" type="range" name="range" id="" />
          </div>
        </div>
      </div>
    </div>
  );
};
