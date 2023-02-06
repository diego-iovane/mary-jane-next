import styled from 'styled-components'
import { motion } from 'framer-motion'

export const HeroSection = styled.div`
    height: 50rem;
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;

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
    background: linear-gradient(180deg, rgba(247, 247, 247, 0) 64.58%, #F7F7F7 100%);
`

export const Inner = styled(motion.div)`
    width: var(--section-width);
    max-width: var(--section-max-width);
    margin: 0 auto;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    bottom: 2rem;
`

export const Content = styled(motion.div)`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Title = styled(motion.h1)`
    color: #ffffff;
    font-size: 5.5rem;
    margin-top: 2rem;
    margin-bottom: .9rem;
    line-height: .5;
    text-align: center;
    padding-bottom: 1rem;

    @media all and (max-width: 960px) {
        font-size: 4.5rem;
    }
`

export const Date = styled.span`
    color: #ffffff;

    @media all and (max-width: 760px) {
        display: block;
    }
`

export const Month = styled.span`
    color: #ffffff;

    @media all and (max-width: 760px) {
        display: block;
        line-height: 1;
        font-size: 6.5rem;
    }
`

export const Year = styled.span`
    color: var(--green);

    @media all and (max-width: 760px) {
        display: block;
        font-size: 6.5rem;
        line-height: .7;
    }
`

export const SubTitle = styled(motion.h1)`
    color: #ffffff;
    font-size: 1rem;
    letter-spacing: .1rem;
    line-height: .6;
    text-align: center;

    @media all and (max-width: 760px) {
        line-height: 1.3;
        width: 20rem;
    }
`

export const CounterContainer = styled(motion.div)`
    border-top: 1px solid #ffffff;
    padding-top: .5rem;
    margin: 0 auto;
`

export const ButtonContainer = styled(motion.div)`
    margin: 0 auto;
`