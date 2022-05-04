import styled from "styled-components";
import { CgSpinnerTwoAlt } from "react-icons/cg";
import { spin } from "../../components/Navbar/Navbar.styles";

export const Title = styled.h1`
    margin: 5rem 0 8rem 0;
    color: #333;
    font:700 clamp(2.4rem, 2.5vw + 1rem, 3.6rem) var(--ff-raleway) ;
    @media(min-width:40em){
        text-align: center;
    }
`

export const QuoteWrapper = styled.div`
    display: grid;
    gap: 5rem;
   
    margin-inline: auto;
    width: fit-content;

    &:last-child{
        margin-bottom: 8rem;
    }
`
export const LoadingIcon = styled(CgSpinnerTwoAlt)`
    position: absolute;
    left: 47.5%;
    top:50%;
    transform: translate(-50%,-50%);
    animation: 0.69s ${spin} infinite linear;
   
`