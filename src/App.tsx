import React, { useState, useEffect, useCallback } from "react";
import Layout from "./components/Layout";
import Dashboard from "./components/Dashboard";
import Tabletop from "./components/Tabletop";
import Star from "./components/Star";
import Robot from "./components/Robot";
import Controls from "./components/Controls";
import GameOver from "./components/GameOver";
import { Screen } from "./components/common";

import { GameState, Direction } from "./types";
import { getRandLocation, getMiddle, isAtEdge } from "./util";

export interface AppProps {}

const App: React.SFC<AppProps> = () => {
  const [score, setScore] = useState<number>(0);
  const [gameState, setGameState] = useState<GameState>(GameState.IDLE);
  const [destroyed, setDestroyed] = useState<boolean>(false);
  const [starLoc, setStarLoc] = useState<[number, number]>([0, 0]);
  const [robotLoc, setRobotLoc] = useState<[number, number]>([0, 0]);
  const [direction, setDirection] = useState<Direction>(Direction.UP);
  const [size, setSize] = useState<number>(5);

  const newGameSetup = useCallback(() => {
    setGameIdle();
    setGameState(GameState.STARTED);
  }, [size, gameState]);

  const endGame = useCallback(() => {
    if (gameState !== GameState.STARTED) return;
    handleGameOver();
  }, [gameState]);

  const setGameIdle = () => {
    setRobotLoc(getMiddle(size));
    setScore(0);
    setDestroyed(false);
    setStarLoc(getRandLocation(size, [robotLoc[0], robotLoc[1]]));
    setGameState(GameState.IDLE);
    setDirection(Direction.UP);
  };

  const rotateLeft = () => {
    if (gameState !== GameState.STARTED) return;
    setDirection(direction > 0 ? direction - 90 : 270);
  };

  const rotateRight = () => {
    if (gameState !== GameState.STARTED) return;
    setDirection(direction < 270 ? direction + 90 : 0);
  };

  const moveForward = () => {
    if (gameState !== GameState.STARTED) return;
    let location = [...robotLoc];
    switch (direction) {
      case Direction.UP:
        location[0] -= 1;
        break;
      case Direction.RIGHT:
        location[1] += 1;
        break;
      case Direction.DOWN:
        location[0] += 1;
        break;
      case Direction.LEFT:
        location[1] -= 1;
        break;
    }

    if (isAtEdge(size, [location[0], location[1]])) {
      setDestroyed(true);
      handleGameOver();
      return;
    }

    setRobotLoc([location[0], location[1]]);
  };

  const timeoutHandler = () => {
    handleGameOver();
  };

  const handleGameOver = () => {
    setGameState(GameState.OVER);
  };

  const keyHandler = (e: KeyboardEvent) => {
    console.log(gameState);
    switch (e.key) {
      case "ArrowUp":
        moveForward();
        break;
      case "ArrowLeft":
        rotateLeft();
        break;
      case "ArrowRight":
        rotateRight();
        break;
    }
  };

  useEffect(() => {
    //check if the star reached
    if (starLoc[0] === robotLoc[0] && starLoc[1] === robotLoc[1]) {
      setScore((prev) => prev + 1);
      // place new star at random location except the location where robot is
      setStarLoc(getRandLocation(size, [robotLoc[0], robotLoc[1]]));
      return;
    }
  }, [size, robotLoc]);

  useEffect(() => {
    document.addEventListener("keydown", keyHandler, false);
    return () => {
      document.removeEventListener("keydown", keyHandler, false);
    };
  }, [gameState, direction, robotLoc, starLoc]);

  useEffect(() => {
    setGameIdle();
  }, []);

  return (
    <>
      <Layout
        size={size}
        setSize={(size: number) => setSize(size)}
        changeEnable={gameState === GameState.IDLE}
      >
        <Dashboard
          score={score}
          timeout={timeoutHandler}
          newGame={newGameSetup}
          endGame={endGame}
          state={gameState}
        />
        <Screen>
          <Tabletop size={size} />
          {gameState > GameState.SETUP ? (
            <>
              <Star size={size} location={[starLoc[0], starLoc[1]]} />
              <Robot
                size={size}
                location={[robotLoc[0], robotLoc[1]]}
                direction={direction}
                destroyed={destroyed}
              />
            </>
          ) : null}
        </Screen>
        <Controls
          state={gameState}
          rotateLeft={rotateLeft}
          rotateRight={rotateRight}
          moveForward={moveForward}
        />
      </Layout>
      <GameOver
        state={gameState}
        score={score}
        newGame={newGameSetup}
        setIdle={setGameIdle}
      />
    </>
  );
};

export default App;
