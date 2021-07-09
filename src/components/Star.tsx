import React from "react";
import styled from "styled-components";
import StarImg from "../assets/star.svg";

export const StarIcon = styled.img`
  max-width: 80%;
  max-height: 80%;
  margin: 20px;
  filter: drop-shadow(3px 3px 5px #222);
`;

export interface StarProps {
  size: number;
  location: [number, number];
}

const Target: React.SFC<StarProps> = ({ size, location }) => {
  const scale = 100 / size;

  return (
    <div
      style={{
        height: `${scale}%`,
        width: `${scale}%`,
        top: `${location[0] * scale}%`,
        left: `${location[1] * scale}%`,
        position: "absolute",
      }}
    >
      <StarIcon src={StarImg} />
    </div>
  );
};

export default Target;
