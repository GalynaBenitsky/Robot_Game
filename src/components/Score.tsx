import React from "react";
import { Card } from "./common";

export interface ScoreProps {
  score: number;
}

const Score: React.SFC<ScoreProps> = ({ score }) => {
  return (
    <Card color={"#fff"}>
      <p>
        SCORE{" "}
        <span style={{ color: "#D2E603" }}>
          {score.toString().padStart(2, "0")}
        </span>
      </p>
    </Card>
  );
};

export default Score;
