import styled from 'styled-components'
import Image from 'next/image'

export const Section = styled.section`
    min-height: var(--section-min-height);
    padding: 5rem 0;
`

export const Inner = styled.div`
    max-width: var(--section-max-width);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    &:hover .arrow {
        opacity: 1;
        bottom: 0;
    }
`

export const SectionTitle = styled.h2`
    font-size: 2.5rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid #000000;
    margin-bottom: 1.5rem;

    @media all and (max-width: 450px) {
        padding-bottom: 1rem;
        line-height: 1.2;
        width: 90%;
    }
`

export const RevWidget = styled.div`
    display: flex;
    justify-content: space-around;
    width: 20rem;
    margin-bottom: .5rem;
`

export const GContainer = styled.div`
    position: relative;
    width: 3rem;
    height: 3rem;
    display: flex;
    align-items: center;
`

export const Num = styled.p`
    font-size: 1rem;
    margin-right: .7rem;
    font-weight: bold;
    position: relative;
    top: 3px;
`

export const GImg = styled(Image)`
    object-fit: cover;
    /* margin-bottom: .5rem; */
    height: 2rem;
    width: auto;
`

export const StarsContainer = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    bottom: 3px;
`

export const Star = styled.svg`
    width: 1.5rem;
    height: 1.5rem;

    path {
        fill: gold;
    }
`

export const ButtonsContainer = styled.div`
    @media all and (max-width: 450px) {
        display: none;
    }
`

// REVIEW
export const ReviewContainer = styled.div`
    position: relative;
    background-color: var(--soft-gray);
    padding: 1rem 2rem;
    border-radius: 7px;
    min-height: 17rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const QuotesIcon = styled.svg`
    width: 2rem;
    height: 2rem;
    
    path { 
        fill: var(--light-green);
    }
`

export const Name = styled.p`
    font-weight: 700;
    font-size: .9rem;
    text-align: right;
    margin-top: 1rem;
`

export const Text = styled.p`
    font-size: .8rem !important;

    p {
        @media all and (max-width: 450px) {
            font-size: .8rem; 
        }
    }

`