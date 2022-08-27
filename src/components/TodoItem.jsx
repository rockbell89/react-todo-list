import React from 'react';
import styled, { css } from 'styled-components';
import { MdDone, MdDelete } from 'react-icons/md';

const CircleCheck = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid #dcdcdc;
  color: #d0d0d0;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  margin: 0 1em;

  ${(props) =>
    props.done &&
    css`
      background-color: green;
      color: white;
    `}
`;

const Text = styled.p`
  font-size: 16px;
  color: black;

  ${(props) =>
    props.done &&
    css`
      opacity: 0.5;
      text-decoration: line-through;
    `}
`;

const RemoveButton = styled.div`
  opacity: 0;
  position: absolute;
  top: 50%;
  right: 0.5em;
  transform: translate(-50%, -50%);
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #c03d3d;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TodoItemWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  padding: 1em 0.5em;

  + div {
    border-top: 1px solid #dcdcdc;
  }

  &:hover {
    color: black;
    background-color: #f5f5f5;

    ${RemoveButton} {
      opacity: 1;
    }
  }
`;

function TodoItem({ done, text }) {
  return (
    <TodoItemWrapper>
      <CircleCheck done={done}>{done && <MdDone></MdDone>}</CircleCheck>
      <Text done={done}>{text}</Text>
      <RemoveButton>
        <MdDelete />
      </RemoveButton>
    </TodoItemWrapper>
  );
}

export default TodoItem;
