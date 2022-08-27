import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { MdAdd } from 'react-icons/md';

const AddButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #835fb2;
  color: white;
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 50%);
  z-index: 5;
  font-size: 40px;
  svg {
    transition: all 0.4s ease;
  }

  ${(props) =>
    props.open &&
    css`
      background-color: gray;
      svg {
        transform: rotate(45deg);
      }
    `}
`;

const FormContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
`;

const InsertForm = styled.div`
 background-color:#f5f5f5;
 padding 1em 1em 2.5em 1em;
 border-bottom-left-radius: 1em;
 border-bottom-right-radius: 1em;
`;

const InsertInput = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid #dcdcdc;
  padding: 0.5em;
  outline: none;
`;

function TodoWrite() {
  const [open, setOpen] = useState(false);

  const onToggle = () => setOpen(!open);

  return (
    <>
      {open && (
        <FormContainer>
          <InsertForm>
            <InsertInput
              placeholder="할 일을 입력하세요..."
              autoFocus
            ></InsertInput>
          </InsertForm>
        </FormContainer>
      )}
      <AddButton onClick={onToggle} open={open}>
        <MdAdd></MdAdd>
      </AddButton>
    </>
  );
}

export default TodoWrite;
