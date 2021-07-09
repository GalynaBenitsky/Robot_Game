import React, { useEffect, useState } from "react";

import { GameState } from "../types";
import { GameOverBtn, GameOverContainer, GameOverContent } from "./common";

export interface GameOverProps {
  state: GameState;
  score: number;
  newGame: () => void;
  setIdle: () => void;
}

const GameOver: React.SFC<GameOverProps> = ({
  state,
  score,
  newGame,
  setIdle,
}) => {
  const [gameOver, setGameOver] = useState(false);

  const handleClose = () => {
    setGameOver(false);
    setIdle();
  };

  const handleNewGame = () => {
    setGameOver(false);
    newGame();
  };

  useEffect(() => {
    if (state !== GameState.OVER) return;
    setTimeout(() => {
      setGameOver(true);
    }, 400);
  }, [state]);

  return (
    <GameOverContainer
      id="myModal"
      style={{ display: gameOver ? "block" : "none" }}
    >
      <GameOverContent>
        <h2 style={{ color: "#FFF600" }}>
          SCORE: {score.toString().padStart(2, "0")}
        </h2>
        <h1 style={{ color: "#FF004D" }}>GAME OVER!!!</h1>

        <GameOverBtn onClick={() => handleNewGame()} disabled={false}>
          NEW GAME
        </GameOverBtn>
        <GameOverBtn
          style={{ marginLeft: "15px" }}
          onClick={() => handleClose()}
          disabled={false}
        >
          EXIT
        </GameOverBtn>
      </GameOverContent>
    </GameOverContainer>
  );
};

export default GameOver;
