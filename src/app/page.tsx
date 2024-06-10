import GameTracker from "@/screens/game-tracker";
import { Metadata } from "next";

export default function Home() {
  return ( <GameTracker/> );
}

export const metadata: Metadata = {
  title: "Koji",
  description: "An action tracker for Hanamikoji",
};
