import React from 'react';
import styled from 'styled-components';
import DragIndicatorIcon from '@material-ui/icons/DragIndicator';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const Container = styled.li`
  list-style: none;
  margin: 0;
  padding: 0;
  background-color: lightslategray;
  display: grid;
  grid-template-rows: 48px 1fr;
  border: 1px solid black;
`;

const ChapterInfo = styled.div`
  display: grid;
  grid-template-columns: 32px 1fr 48px;
  align-items: center;
  border: 1px solid white;
`;

const DragHandle = styled.div`
  grid-column: 1 / 2;
`;

const ChapterTitle = styled.div`
  grid-column: 2 / 3;
`;

const OptionButton = styled.div`
  grid-column: 3 / 4;
  justify-content: center;
  align-items: center;
`;

const OptionIcon = styled(MoreHorizIcon)`
  border-radius: 50%;
  background-color: #69737e;
`;

const LessonArea = styled.div`
  grid-row: 2;
  background-color: tomato;
`;

function ChapterItemContainer() {
  return (
    <Container>
      <ChapterInfo>
        <DragHandle>
          <DragIndicatorIcon />
        </DragHandle>
        <ChapterTitle></ChapterTitle>
        <OptionButton>
          <OptionIcon />
        </OptionButton>
      </ChapterInfo>
      <LessonArea></LessonArea>
    </Container>
  );
}

export default ChapterItemContainer;
