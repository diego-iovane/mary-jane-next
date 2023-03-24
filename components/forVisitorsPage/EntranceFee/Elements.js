import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Inner = styled(motion.div)`
    width: var(--section-width);
    max-width: var(--section-max-width);
    margin: 7rem auto;
    position: relative;
`

export const Title = styled.h1`
    padding-bottom: 1rem;
    font-size: 2.5rem;
`

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 4%;
    margin: 1rem 0;
`

export const Card = styled.div`
    box-shadow: var(--soft-shadow);
    padding: 2rem;
    border-radius: 12px;
    transition: transform .2s ease-in-out;

    &:hover {
        transform: scale(1.1);
    }
`

export const BoxTitle = styled.p`
    font-size: 1.5rem;
    /* margin-bottom: .5rem; */
    font-weight: bold;
`

export const BoxSubtitle = styled.p`
    font-size: 1rem;
`

export const BoxOverTitle = styled.p`
    font-size: .9rem;
`

export const Price = styled.p`
    font-size: 3rem;
    color: var(--green);
    font-weight: bold;
`

export const OfferText = styled.p`
    font-size: .8rem;
    color: var(--gray);
`

export const OfferPrice = styled.p`
    font-size: 1.2rem;
    color: var(--gray);
`