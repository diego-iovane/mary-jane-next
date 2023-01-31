import styled from 'styled-components'
import { motion } from 'framer-motion'

export const HeroSection = styled.div`
    height: 100vh;
    max-height: 46rem;
    width: 100%;
    position: relative;
    display: flex;
    align-items: flex-end;

    @media all and (max-width: 500px) {
        height: 100vh;
    }
`

export const WhiteOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.88) 0%, rgba(0, 0, 0, 0.29) 18.23%, rgba(0, 0, 0, 0.46) 50%, rgba(83, 83, 83, 0.46) 91.67%, #F6F6F5 100%);
`

export const Inner = styled(motion.div)`
    width: var(--section-width);
    max-width: var(--section-max-width);
    margin: 0 auto;
    position: relative;
    bottom: 4rem;
    left: 4rem;
`

export const Content = styled(motion.div)`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

export const Title = styled(motion.h1)`
    color: #ffffff;
    font-size: 5.5rem;
    margin-top: 1rem;
    margin-bottom: .5rem;
    line-height: .5;
    border-bottom: 1px solid #ffffff;
    padding-bottom: 1.5rem;

    @media all and (max-width: 850px) {
        font-size: 4.5rem;
    }
`

export const SubTitle = styled(motion.h2)`
    color: #ffffff;
    font-size: 1rem;
    letter-spacing: .1rem;

    @media all and (max-width: 450px) {
        font-size: 1.1rem;
        /* line-height: .7; */
    }
`

export const CounterContainer = styled(motion.div)``

export const ButtonContainer = styled(motion.div)``