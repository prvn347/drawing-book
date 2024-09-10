"use client";
import { Canvas } from "@/components/Canvas";
import { SideBar } from "@/components/SideBar";
import { RecoilRoot } from "recoil";

export default function Home() {
  return (
    <div>
      <RecoilRoot>
        <SideBar />
        <Canvas />
      </RecoilRoot>
    </div>
  );
}
