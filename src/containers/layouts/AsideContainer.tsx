import React from 'react';
import styled from 'styled-components';
import { ChapterItemContainer } from 'containers/sidebars';

const Container = styled.aside`
  grid-column: 1;
  grid-row: 2 / 6;
  background-color: #baa0d3;
  border: 1px solid black;
`;

function AsideContainer() {
  return (
    <Container>
      <ChapterItemContainer />
      <ChapterItemContainer />
      <ChapterItemContainer />
    </Container>
  );
}

export default AsideContainer;
