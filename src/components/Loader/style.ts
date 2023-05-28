import styled from "styled-components";

const Spinner = styled.div`
  display: flex;
  justify-content: center;

  img {
    animation: spin 1.2s linear infinite;

    @keyframes spin {
      0% {
        transform: rotate(0deg);
	  }
      100% {
        transform: rotate(360deg);
      }
    }
`;

export default Spinner;
