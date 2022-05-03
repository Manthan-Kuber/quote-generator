import styled from "styled-components";

export const QuoteContainer = styled.section`
  border-left: 8px solid var(--clr-primary);
  font: 500 clamp(2.4rem, 2.5vw + 1rem, 3.6rem) var(--ff-raleway);
  align-self: center;
  p {
    padding-left: clamp(0.5rem, 5vw + 2rem, 10rem);
    max-width: 32ch;
  }
`;
