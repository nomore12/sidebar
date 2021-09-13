import React from 'react';
import styled from 'styled-components';

const Container = styled.header`
  grid-column: 1 / 6;
  grid-row: 1;
  background-color: #ffffff;
`;

function HeaderContainer() {
  return <Container></Container>;
}

export default HeaderContainer;
