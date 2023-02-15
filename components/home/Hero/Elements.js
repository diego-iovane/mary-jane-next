import styled from 'styled-components'
import { motion } from 'framer-motion'

export const HeroSection = styled.div`
    height: 100vh;
    max-height: 60rem;
    min-height: 39rem;
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

// export const WhiteOverlay = styled.div`
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background: linear-gradient(180deg, rgba(247, 247, 247, 0) 84.58%, #F7F7F7 100%);
// `

export const Inner = styled(motion.div)`
    width: var(--section-width);
    max-width: var(--section-max-width);
    margin: 0 auto;
    height: 100vh;
    display: flex;
    align-items: center;
    position: relative;
    padding-top: 4rem;
    padding-left: 4rem;
`

export const Content = styled(motion.div)`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

export const Title = styled(motion.div)`
    color: #ffffff;
    margin-bottom: 1rem;
`

export const Date = styled.h2`
    color: #ffffff;
    font-size: 5.5rem;
    line-height: 1;

    @media all and (min-width: 1400px) {
        font-size: 7rem;
    }
`

export const Month = styled.h2`
    color: #ffffff;
    font-size: 7.6rem;
    margin-bottom: 1.1rem;

    @media all and (min-width: 1400px) {
        font-size: 9.7rem;
        margin-bottom: 1.5rem;
    }
`

export const Year = styled.h2`
    color: var(--green);
    font-size: 8.1rem;

    @media all and (min-width: 1400px) {
        font-size: 10.4rem;
    }
`

export const SubTitle = styled(motion.h1)`
    color: #ffffff;
    font-size: 1.15rem;
    letter-spacing: .1rem;
    line-height: .8;
    margin-bottom: .5rem;

    @media all and (min-width: 1400px) {
        font-size: 1.5rem;
    }
`

export const CounterContainer = styled(motion.div)`
    border-top: 1px solid #ffffff;
    padding-top: .5rem;
    margin: 0 auto;

    @media all and (min-width: 1400px) {
        margin: 0;
        width: 100%;
    }
`

export const ButtonContainer = styled(motion.div)``