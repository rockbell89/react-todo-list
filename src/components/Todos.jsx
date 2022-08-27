import React from 'react';
import styled from 'styled-components';
import TodoHead from './TodoHead';
import TodoList from './TodoList';
import TodoWrite from './TodoWrite';

const TodoWrapper = styled.div`
  position: relative;
`;

const TodoContainer = styled.div`
  border-radius: 1em;
  overflow: hidden;
  background-color: #ffffff;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
  width: 100%;
  min-width: 400px;
  max-width: 400px;
  max-height: 600px;
  display: flex;
  flex-direction: column;
  padding-bottom: 100px;
`;

function Todos() {
  return (
    <TodoWrapper>
      <TodoContainer>
        <TodoHead></TodoHead>
        <TodoList></TodoList>
      </TodoContainer>
      <TodoWrite></TodoWrite>
    </TodoWrapper>
  );
}

export default Todos;
