import styled, { keyframes } from "styled-components";

export const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 2.4rem;
`;

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

export const Footer = styled.footer`
  margin-top: auto;
  padding-top: 2.4rem;
`;

export const FooterText = styled.p`
  font: 1.4rem var(--ff-montserrat);
  color: #bdbdbd;
  text-align: center;
`;
