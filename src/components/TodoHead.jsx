import React from 'react';
import styled from 'styled-components';

const TodoHeadWrapper = styled.div`
  padding: 0.5em 1em;
  background-color: #835fb2;
  h1 {
    font-size: 24px;
    font-weight: bold;
    color: #fff;
  }
`;

function TodoHead() {
  return (
    <TodoHeadWrapper>
      <h1>2022년 08월 27일</h1>
    </TodoHeadWrapper>
  );
}

export default TodoHead;
