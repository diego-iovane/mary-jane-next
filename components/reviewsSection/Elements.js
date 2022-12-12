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

`

export const Star = styled.span`
    font-size: x-large;
    width: 50px;
    display: inline-block;
    color: gray;
    color: gold;

    &::before {
        content: '\2605';
    }
`

export const HalfStar = styled.span`
    font-size: x-large;
    width: 50px;
    display: inline-block;
    color: gray;

    &::before {
        content: '\2605';
    }

    &::after {
        content: '\2605';
        color: gold;
        margin-left: -20px;
        width: 10px;
        position: absolute;
        overflow: hidden;
    }
`

export const EmptyStar = styled.span`
    font-size: x-large;
    width: 50px;
    display: inline-block;
    color: gray;

    &::before {
        content: '\2605';
    }
`

export const ReviewsContainer = styled.div`
    /* width: 100%; */
    width: 70rem;
    height: 22rem;
    margin-top: 2.5rem;
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