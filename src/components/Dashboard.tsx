import React from "react";
import styled from "styled-components";
import { GameBtn } from "./common";

import { GameState } from "../types";
import Timer from "./Timer";
import Score from "./Score";

export const Main = styled.div`
  display: grid;
  padding: 0;
  grid-template-columns: 1fr 1fr 1fr;
`;

export interface DashboardProps {
  score: number;
  timeout: () => void;
  newGame: () => void;
  endGame: () => void;
  state: GameState;
}

const Dashboard: React.SFC<DashboardProps> = ({
  score,
  timeout,
  newGame,
  endGame,
  state,
}) => {
  const btnLabel = state === GameState.STARTED ? "END GAME" : "NEW GAME";
  return (
    <Main>
      <Score score={score} />
      <Timer timeout={timeout} state={state} />
      <GameBtn onClick={state === GameState.STARTED ? endGame : newGame}>
        {btnLabel}
      </GameBtn>
    </Main>
  );
};

export default Dashboard;
