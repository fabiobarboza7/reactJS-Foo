import styled, { keyframes, css } from 'styled-components';

export const Title = styled.h1`
  font-size: 24px;
  color: ${props => (props.fabio ? 'red' : 'green')};
  font-family: Arial, Helvetica, sans-serif;
`;

export const Container = styled.div`
  max-width: 800px;
  padding: 40px;
  margin: 100px auto;
  background: tomato;
  border-radius: 4px;
`;

export const Form = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: row;

  input {
    flex: 1;
    border: 1px solid #eee;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 16px;
  }
`;

export const List = styled.ul`
  padding: 30px;
  margin-top: 30px;
  border-top: 1px solid #eee;
  list-style: none;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }

`;

export const SubmitButton = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.loading,
}))`
  background: purple;
  border: 0;
  padding: 0 15px;
  margin-left: 10px;
  border-radius: 4px;

  display: flex;
  justify-content: center;
  align-items: center;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  ${props =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;
