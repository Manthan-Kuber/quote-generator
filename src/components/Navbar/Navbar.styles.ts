import styled from "styled-components"

export const Nav = styled.nav`
  color: #333;
  font: 500 1.8rem var(--ff-montserrat);
  display: flex;
  justify-content: flex-end;
`;

export const RandomContainer = styled.div`
  display: flex;
  cursor: pointer;
  gap: 0.5rem;
  .icon {
    transition: transform 1s;
    position: relative;
    top: 8px;
  }
  &:hover {
    .icon {
      transform: rotate(360deg);
    }
  }
`;