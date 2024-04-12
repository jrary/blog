import React from "react";
import Contents from "../component/Contents";
import Header from "../component/Header";
import styled from "styled-components";

const HomePage = () => {
  return (
    <Container>
        <HeaderWrapper>
            <Header />
        </HeaderWrapper>
        <Contents />
    </Container>
  );
};

export default HomePage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000; /* 헤더가 다른 요소 위에 나타나도록 z-index 설정 */
`;
