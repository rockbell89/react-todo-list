import React from 'react';
import styled from 'styled-components';
import { useTodoState } from '../TodoContext';

const TodoHeadWrapper = styled.div`
  padding: 1em 1em;
  border-bottom: 1px solid #dcdcdc;
  h1 {
    font-size: 24px;
    font-weight: bold;
    color: #black;
  }
  span {
    display: block;
    font-size: 14px;
    color: #a0a0a0;
  }
  p {
    font-size: 14px;
    color: #835fb2;
    font-weight: bold;
    margin-top: 40px;
  }
`;

function TodoHead() {
  const todos = useTodoState();
  const undoneTasks = todos.filter((todo) => !todo.done);

  const today = new Date();
  const dateString = today.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const dayName = today.toLocaleDateString('ko-KR', {
    weekday: 'long',
  });

  return (
    <TodoHeadWrapper>
      <h1>{dateString}</h1>
      <span>{dayName}</span>
      <p>할 일 {undoneTasks.length}개 남음</p>
    </TodoHeadWrapper>
  );
}

export default TodoHead;
