import styled, { css } from "styled-components";
import { GAME_DIMENSION } from "../config";

export const NewGameBtn = styled.button`
  background-color: #39a2db;
  outline: none;
  border: none;
  color: white;
  border-radius: 4px;
  text-align: center;
  cursor: pointer;
  box-shadow: 0 3px 3px 0 #222;
  :hover {
    background-color: #03256c;
  }
  :active {
    transform: translateY(1px);
    background-color: #36837f;
  }
  :disabled {
    background-color: rgb(57, 162, 219, 0.5);
    opasity: 0.5;
    box-shadow: none;
    color: #eff48e;
  }
`;

export const Button = styled(NewGameBtn)`
  margin: 10px;
  padding: 20px 25px 15px 25px;
  font-size: 16px;
`;

export const GameBtn = styled(NewGameBtn)`
  margin: 5px;
  padding: 2px;
  font-size: 24px;
`;
export const MenuBtn = styled.button`
  margin: 15px;
  padding: 6px 8px 6px 8px;
  font-size: 18px;
  background-color: transparent;
  outline: none;
  border: none;
  color: white;
  color: #393e46;
  text-align: center;
`;

interface CardProps {
  color?: string;
}
export const Card = styled.div<CardProps>`
  border: none;
  border-radius: 4px;
  background-color: #39a2db;
  margin: 5px;
  padding: 2px;
  font-size: 24px;
  text-align: center;
  ${(props) =>
    props.color &&
    css`
      color: ${props.color};
    `};
`;

export const Screen = styled.div`
  position: relative;
  height: ${GAME_DIMENSION + 50}px;
  width: ${GAME_DIMENSION + 20}px;
  background-color: #fff;
  margin: 10px 0px;
`;

export const GameOverContainer = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: black;
  background-color: #3c5186;
`;
export const GameOverContent = styled.div`
  background-color: transparent;
  color: #fff;
  text-align: center;
  margin: 15% auto;
  padding: 20px;
  width: 80%;
`;

export const GameOverBtn = styled(GameBtn)`
  margin: 30px auto;
  padding: 10px 20px 10px 20px;
`;

export const IconBtn = styled.button`
  background-color: transparent;
  color: #26666b;
  outline: none;
  border: none;
  cursor: pointer;
  margin-left: 5px;
  :hover {
    color: #03256c;
  }
  :active {
    transform: translateY(1px);
    color: #26666b;
  }
  :disabled {
    transform: translateY(1px);
    color: #1c4547;
  }
`;

export const GameContainerBase = styled.div`
  display: grid;
  grid-template-columns: 52px 80px 1fr 1fr 57px;
  padding: 8px 20px;
  font-size: 18px;
  border-radius: 4px;
`;

export const GameHeader = styled(GameContainerBase)`
  margin: 4px 0 4px 0;
  background-color: #3a4f52;
`;

interface GameContainerProps {
  active?: boolean;
}
export const GameContainer = styled(GameContainerBase)<GameContainerProps>`
  margin: 4px 0 4px 0;
  background-color: #fff;
  ${(props) =>
    props.active &&
    css`
      background-color: #84462a;
    `};
  :hover {
    background-color: #03256c;
  }
`;

export const GameItem = styled.div`
  text-align: left;
`;
