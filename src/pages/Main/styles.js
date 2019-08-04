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
  background: ${props => props.loadingUl && '#fff'};
  border-radius: 4px;
  max-width: 100%;
  padding: 10px;
  margin-top: 30px;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  li {
    margin: 5px;
    border-radius: 4px;
    overflow: hidden;
    display: flex;
    align-items: center;
  }

  li p {
    margin-left: 5px;
    word-break: break-word;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
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
  background: linear-gradient(55deg, tomato, purple);
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
