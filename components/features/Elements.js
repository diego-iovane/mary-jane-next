import styled from 'styled-components'
import Image from 'next/image'
import { motion } from 'framer-motion'

export const Section = styled.section`
    min-height: 10rem;
    padding-top: 5rem;
`

export const Inner = styled.div`
    max-width: var(--section-max-width);
    margin: 0 auto;
    display: flex;
    justify-content: center;
`

export const Items = styled.div`
    display: flex;
    justify-content: space-around;
    width: 55rem;
`

export const ItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 8rem; 
`

export const IconContainer = styled.div`
    width: 3.5rem;
    height: 3.5rem;
    position: relative;
    box-shadow: var(--soft-shadow);
    border-radius: 500px;
    padding: 2rem;
`

export const Icon = styled(Image)`
    transform: translate(-2px, 5px);
`

export const CountContainer = styled.div`
    display: flex;

    span {
        font-weight: bold;
        font-size: 2rem;
        display: flex;
        align-items: center;

        @media all and (max-width: 500px) {
            font-size: 1.5rem;
        }
    }
`

export const Text = styled.p`
    text-align: center;
    font-size: .9rem;
    line-height: .7;

    @media all and (max-width: 500px) {
        font-size: .8rem;
    }
`

export const CounterContainer = styled(motion.div)`
    text-align: center;
    font-size: 2rem;
    font-family: 'Oswald', sans-serif;
    font-weight: bold;

    @media all and (max-width: 500px) {
        font-size: 1.5rem;
    }
`