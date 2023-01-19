import React from 'react';
import styled from 'styled-components';
import { useTodoState } from '../TodoContext';
import TodoItem from './TodoItem';

const TodoListWrapper = styled.div`
  background-color: #ffffff;
  overflow-y: auto;
`;

function TodoList() {
  const todos = useTodoState();

  return (
    <TodoListWrapper>
      {todos &&
        todos.map((todo) => {
          return (
            <TodoItem
              id={todo.id}
              text={todo.text}
              done={todo.done}
              key={todo.id}
            ></TodoItem>
          );
        })}
    </TodoListWrapper>
  );
}

export default TodoList;
