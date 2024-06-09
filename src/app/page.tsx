"use client";

import PlayerActions from "@/components/player-actions";
import GameTracker from "@/screens/game-tracker";
import styled from "styled-components";

const Main = styled.main`
  height: 100%;
`;

export default function Home() {
  return (
    <Main>
      <GameTracker/>
    </Main>
  );
}
