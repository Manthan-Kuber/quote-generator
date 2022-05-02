import styled from "styled-components";

export const Title = styled.h1`
    margin: 5rem 0 8rem 10rem;
    color: #333;
    font:700 3.6rem var(--ff-raleway) ;
    text-align: center;
`

export const QuoteWrapper = styled.div`
    display: grid;
    gap: 5rem;
    padding-left: 10rem;
    margin-inline: auto;
    width: fit-content;

    &:last-child{
        margin-bottom: 8rem;
    }
`