import styled from 'styled-components'
import { motion } from 'framer-motion'
import Image from 'next/image'

export const Section = styled.div`
    padding: 5rem 0;
    width: 100%;
`

export const Inner = styled(motion.div)`
    width: var(--section-width);
    max-width: var(--section-max-width);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    position: relative;
`

export const ButtonsContainer = styled.div`
    @media all and (max-width: 450px) {
        display: none;
    }
`

// CARDS
export const CardContainer = styled.div`
    position: relative;
    background: linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.65) 100%);
    border-radius: 12px;
    min-height: 30rem;
    transform: ${({ active }) => active ? 'scale(1)' : 'scale(.8)'};
    transition: transform .3s ease-in-out;
    overflow: hidden;
    opacity: ${({ active }) => active ? '1' : '.5'};
`

export const ImgContainer = styled.div`
    width: 100%;
    height: 15rem;
    position: relative;
`

export const Img = styled(Image)`
    object-fit: cover;
`

export const Content = styled.div`
    padding: 1rem 2rem;
`

export const Title = styled.h2`

`