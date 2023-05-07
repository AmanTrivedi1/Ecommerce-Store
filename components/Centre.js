import styled from "styled-components";

const StyledDiv = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
`;

export default function Centre({ children }) {
  return <StyledDiv>{children}</StyledDiv>;
}
