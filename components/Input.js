import styled from "styled-components";

const StyledInput = styled.input`
  width: 100%;
  padding: 5px;
  background-color: #f0eeed;
  margin-bottom: 5px;
  border: 1px solid #454545;
  border-radius: 5px;
  box-sizing: border-box;
`;

export default function Input(props) {
  return <StyledInput {...props} />;
}
