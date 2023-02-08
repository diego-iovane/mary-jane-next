import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Section = styled.section`
    padding: 5rem 0 2rem 0;
`

export const Inner = styled.div`
    width: var(--section-width);
    max-width: var(--section-max-width);
    margin: 0 auto;
    position: relative;
    display: flex;

    @media all and (max-width: 450px) {
        flex-direction: column;
    }
`

export const BgGreen = styled.div`
    width: 30rem;
    height: 30rem;
    background: radial-gradient(50% 50% at 50% 50%, rgba(147, 194, 68, 0.40) 0%, rgba(147, 194, 68, 0) 100%);
    position: absolute;
    top: 10rem;
    left: 35rem;
`

export const BgPink = styled.div`
    width: 30rem;
    height: 30rem;
    background: radial-gradient(50% 50% at 50% 50%, rgba(226, 123, 175, 0.20) 0%, rgba(226, 123, 175, 0) 100%);
    position: absolute;
    top: 1rem;
    left: 6rem;
`

export const FeaturesContainer = styled(motion.div)`
    width: 50%;
    position: relative;
    padding: 0 2rem;
    z-index: 10;
`

export const Content = styled(motion.div)`
    width: 50%;
    position: relative;
    z-index: 10;
`

export const Title = styled.h2`
    font-size: 3.5rem;
    line-height: 1.2;
`

export const Text = styled.div`
    margin: 2rem 0;
`