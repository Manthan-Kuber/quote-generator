import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 95vw;
`;

export const QuoteContainer = styled.section`
  border-left: 8px solid var(--clr-primary);
  font: 500 3.6rem var(--ff-raleway);
  p{
    padding-left: 10rem;
    max-width: 32ch;
    
  }
`
