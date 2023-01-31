import styled from 'styled-components'
import { motion } from 'framer-motion'

export const HeroSection = styled.div`
    height: 42rem;
    width: 100%;
    position: relative;

    @media all and (max-width: 500px) {
        height: 100vh;
    }
`

export const Inner = styled(motion.div)`
    width: var(--section-width);
    max-width: var(--section-max-width);
    margin: 0 auto;
    position: relative;
    top: 6rem;
    left: 0;
`

export const Content = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

export const Title = styled.h1`
    color: #ffffff;
    font-size: 5.5rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    line-height: .5;
    border-bottom: 1px solid #ffffff;
    padding-bottom: 2.5rem;

    @media all and (max-width: 850px) {
        font-size: 4.5rem;
    }
`

export const SubTitle = styled.h2`
    color: #ffffff;
    font-size: 1.1rem;
    margin-bottom: 1rem;
    letter-spacing: .1rem;

    @media all and (max-width: 450px) {
        font-size: 1.1rem;
        /* line-height: .7; */
    }
`