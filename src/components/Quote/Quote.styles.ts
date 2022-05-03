import styled from "styled-components";
import { HiOutlineClipboardCopy, HiCheck } from "react-icons/hi";

export const QuoteContainer = styled.section`
  border-left: 8px solid var(--clr-primary);
  font: 500 clamp(2.4rem, 2.5vw + 1rem, 3.6rem) var(--ff-raleway);
  align-self: center;
  position: relative;
  p {
    padding-left: clamp(0.5rem, 5vw + 2rem, 10rem);
    max-width: 32ch;
  }
`;

export const CopyToClipboardIcon = styled(HiOutlineClipboardCopy)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%) scale(1.2);
  left: 2%;
  cursor: pointer;
  color: #787b7f;
`;
export const CheckIcon = styled(HiCheck)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%) scale(1.2);
  left: 2%;
  cursor: pointer;
  color: #787b7f;
`;
