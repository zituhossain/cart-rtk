import styled from "styled-components";

export const StyledForm = styled.form`
  max-width: 350px;
  width: 100%;
  margin: 2rem auto;

  h2 {
    margin-bottom: 1rem;
  }

  button,
  input {
    height: 35px;
    width: 100%;
    padding: 7px;
    margin-bottom: 1rem;
    border: 1px solid rgb(220, 220, 220);
    border-radius: 5px;
    outline: none;

    &:focus {
      border: 1px solid rgb(0, 208, 255);
    }
  }

  button {
    cursor: pointer;

    &:focus {
      border: none;
    }
  }

  p {
    font-size: 15px;
    color: red;
  }
`;
