import React from 'react';
import styled from 'styled-components';

const Container = styled.main`
  grid-column: 2 / 6;
  grid-row: 2 / 6;
  background-color: lightsteelblue;
  border: 1px solid black;
  display: grid;
  grid-template-columns: 1fr 1080px 1fr;
  grid-template-rows: 82px 1fr;
`;

const Head = styled.div`
  grid-column: 1 / 4;
  grid-row: 1;
  background-color: lightpink;
`;

const Content = styled.div`
  grid-column: 2;
  grid-row: 2;
  background-color: lightyellow;
`;

function MainContainer() {
  return (
    <Container>
      <Head>head</Head>
      <Content>content</Content>
    </Container>
  );
}

export default MainContainer;
