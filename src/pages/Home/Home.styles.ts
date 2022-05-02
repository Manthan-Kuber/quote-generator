import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-block: auto;
`;

export const QuoteContainer = styled.section`
  border-left: 8px solid var(--clr-primary);
  font: 500 3.6rem var(--ff-raleway);
  align-self: center;
  p {
    padding-left: 10rem;
    max-width: 32ch;
  }
`;

export const AuthorContainer = styled.div`
  margin-top: 11rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4rem 3rem;
  width: 50%;
  align-self: center;
  transition: transform ease-in 0.3s, color ease-in-out 0.6s,
    background-color ease-in-out 1s;
  h3 {
    font: 700 2.4rem var(--ff-raleway);
    color: #4f4f4f;
  }

  p {
    font: 500 1.4rem var(--ff-raleway);
    margin-top: 0.8rem;
    color: #828282;
  }

  .icon {
    color: transparent;
  }

  &:hover {
    cursor: pointer;
    background-color: #333;
    transform: translateX(5%);

    h3,
    .icon {
      color: #f2f2f2;
    }
  }
`;
