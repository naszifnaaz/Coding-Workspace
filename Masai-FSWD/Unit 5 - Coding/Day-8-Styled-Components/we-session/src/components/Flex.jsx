import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  justify-content: center;

  & div {
    color: red;
    padding: 5px;
    margin: 5px;
    background-color: lightyellow;
  }
`;
export { Flex };
