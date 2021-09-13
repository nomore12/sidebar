import React from 'react';
import styled from 'styled-components';
import {
  HeaderContainer,
  MainContainer,
  AsideContainer,
} from 'containers/layouts';

const Container = styled.div`
  display: grid;
  width: 100%;
  height: 100vh;
  grid-template-columns: 320px repeat(4, 1fr);
  grid-template-rows: 64px 1fr;
  gap: 4px 8px;
  background-color: lightgray;
`;

function Main() {
  return (
    <Container>
      <HeaderContainer></HeaderContainer>
      <AsideContainer />
      <MainContainer />
    </Container>
  );
}

export default Main;
