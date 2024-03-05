"use client";
import { SlowComponent } from "./SlowComponent";
import { PacmanLoader } from "react-spinners";
export default function Loading() {
  return (
    <div className="flex h-screen w-full justify-center pt-20">
      <p className="text-green-400">Loading your slow page...</p>
      <SlowComponent />
      <PacmanLoader loading={true} color="#ffffff" />
    </div>
  );
}
