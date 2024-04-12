import React, { useEffect, useState } from "react";
import Contents from "../component/Contents";
import styled from "styled-components";
import Header from "../component/Header";

const HomePage = () => {

    return (
        <Container>
            <Header />
            <Contents />
        </Container>
    );
}

export default HomePage;

const Container = styled.div`
  display: flex;
  width: 100vw;
  flex-direction: column;
  align-items: center;
  position: relative;
`;