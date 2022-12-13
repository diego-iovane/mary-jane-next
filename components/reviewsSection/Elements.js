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

`

export const GContainer = styled.div`
    position: relative;
`

export const GImg = styled(Image)`
    object-fit: contain;
`

export const StarsContainer = styled.div`
    margin-bottom: 1rem;
`

export const Star = styled.svg`
    width: 1.5rem;
    height: 1.5rem;

    path {
        fill: gold;
    }
`

// REVIEW
export const ReviewContainer = styled.div`
    position: relative;
    background-color: var(--soft-gray);
    padding: 1rem 2rem;
    border-radius: 7px;
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
    font-size: .8rem;
`