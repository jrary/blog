import React from "react";
import styled from "styled-components";
import Home from "./Home";
import Profile from "./Profile";
import Project from "./Project";
import Contact from "./Contact";

const Contents = () => (
  <Container>
    <ContentsWrapper id="home">
      <Home />
    </ContentsWrapper>
    <ContentsWrapper id="profile">
      <Profile />
    </ContentsWrapper>
    <ContentsWrapper id="project">
      <Project />
    </ContentsWrapper>
    <ContentsWrapper id="contact">
      <Contact />
    </ContentsWrapper>
  </Container>
);

export default Contents;
const Container = styled.div`
  display: flex;
  width: 100vw;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
`;

const ContentsWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${(props) => (props.bgColor ? props.bgColor : "#fff")};
`;