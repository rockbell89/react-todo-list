import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const TodoListWrapper = styled.div`
  background-color: #ffffff;
  overflow-y: auto;
`;

function TodoList() {
  return (
    <TodoListWrapper>
      <TodoItem text="TODO LIST" done={true} />
      <TodoItem text="TODO LIST 2" done={false} />
      <TodoItem text="TODO LIST 3" done={false} />
      <TodoItem text="TODO LIST 4" done={false} />
    </TodoListWrapper>
  );
}

export default TodoList;
