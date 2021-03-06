import styled, { keyframes } from "styled-components";
import { MdOutlineArrowBack } from "react-icons/md";

export const spin = keyframes`
  from{
    transform:rotate(0deg);
  }
  to{
    transform:rotate(360deg) ;
  }
`;

export const Nav = styled.nav<{ iconAlign: boolean }>`
  color: #333;
  font: 500 1.8rem var(--ff-montserrat);
  display: flex;
  justify-content: ${(props) =>
    props.iconAlign ? "space-between" : "flex-end"};
`;

export const BackIcon = styled(MdOutlineArrowBack)`
  cursor: pointer;
`;

export const RandomContainer = styled.div`
  display: flex;
  cursor: pointer;
  gap: 0.5rem;
  transition: all 0.1s ease-in-out;
  .icon {
    animation: 0.69s ${spin} linear infinite;
    animation-play-state: paused;
    position: relative;
    top: 8px;
  }
  &:hover {
    transform: scale(1.1);
    .icon {
      animation-play-state: running;
    }
  }
  &:active {
    transform: scale(0.9);
  }
`;
