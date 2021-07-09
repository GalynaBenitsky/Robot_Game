import React from "react";
import styled from "styled-components";

import { MenuBtn } from "./common";
import RobotIcon from "../assets/robot.png";

export const AppLayout = styled.div`
  padding: 10px;
`;

export const Header = styled.header`
  display: grid;
  grid-template-columns: 32px 168px 1fr 200px;
  padding: 15px;
  justify-content: space-between;
  min-width: 610px;
  margin-bottom: 20px;
`;
export const Logo = styled.img`
  font-size: 3em;
  max-height: 48px;
`;

export const Main = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
`;

export const Container = styled.div`
  margin: 0;
  padding: 0 5px;
  min-width: 620px;
`;

export interface LayoutProps {
  size: number;
  setSize: (size: number) => void;
  changeEnable: boolean;
  children: any;
}

const Layout: React.SFC<LayoutProps> = ({
  size,
  setSize,
  changeEnable,
  children,
}) => {
  return (
    <AppLayout>
      <Header>
        <div>
          <Logo src={RobotIcon} />
        </div>
        <div style={{ justifySelf: "start" }}>
          <MenuBtn>ROBOT GAME</MenuBtn>
        </div>
        <div
          style={{
            textAlign: "center",
            fontSize: "16px",
            paddingTop: "9px",
            color: "#a2a7aa",
          }}
        ></div>
        <div style={{ justifySelf: "end" }}></div>
      </Header>
      <Main>
        <Container>{children}</Container>
      </Main>
    </AppLayout>
  );
};

export default Layout;
