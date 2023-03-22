import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Inner = styled(motion.div)`
    width: var(--section-width);
    max-width: var(--section-max-width);
    margin: 9rem auto;
    position: relative;
`

export const Title = styled.h1`
    padding-bottom: 1rem;
    font-size: 2.5rem;
`

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 8%;
    margin: 1rem auto;
    width: 80%;
`

export const MapContainer = styled.div` 
`

export const Map = styled.div`
    width: 28rem;
    height: 25rem;
    border-radius: 12px;
    box-shadow: 0px 2px 10px 2px rgba(0, 0, 0, 0.1);
    overflow: hidden;
`

export const DetailsContainer = styled.div`
    /* padding-left: 6rem; */
`

export const DetailsTitle = styled.h3`
    font-size: 1.8rem;
    margin-bottom: .8rem;
`

export const SubTitle = styled.h6`
    font-size: 1.4rem;
    font-weight: 400;
    margin-bottom: .7rem;
    line-height: 1.7;
`

export const Item = styled.div`
    margin-bottom: .5rem;
`

export const Text = styled.p`
    font-size: .9rem;
    margin-bottom: .1rem;

    span {
        font-weight: bold;
    }
`
