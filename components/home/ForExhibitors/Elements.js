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

export const FeaturesContainer = styled(motion.div)`
    width: 50%;
    position: relative;
    padding: 0 2rem;
`

export const Content = styled(motion.div)`
    width: 50%;
`

export const Title = styled.h2`
    font-size: 3.5rem;
    line-height: 1.2;
`

export const Text = styled.div`
    margin: 2rem 0;
`