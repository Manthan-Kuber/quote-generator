import styled from "styled-components";

export const Title = styled.h1`
    margin: 5rem 0 8rem 10rem;
    color: #333;
    font:700 clamp(2.4rem, 2.5vw + 1rem, 3.6rem) var(--ff-raleway) ;
    @media(min-width:40em){
        text-align: center;
    }
`

export const QuoteWrapper = styled.div`
    display: grid;
    gap: 5rem;
    padding-left: clamp(0.5rem, 5vw + 2rem, 10rem);
    margin-inline: auto;
    width: fit-content;

    &:last-child{
        margin-bottom: 8rem;
    }
`