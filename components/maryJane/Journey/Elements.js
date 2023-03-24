import styled from 'styled-components'
import Image from 'next/image'
import { motion } from 'framer-motion'

export const Inner = styled(motion.div)`
    width: var(--section-width);
    max-width: var(--section-max-width);
    margin: 0 auto;
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    top: 2rem;
    padding: 5rem 0 0 0;
`

export const Title = styled.h2`
    font-size: 3rem;
`

export const SwiperContainer = styled.div`
    position: relative;
    margin-top: 4rem;
    margin-left: 1rem;
`

export const CardContainer = styled.article`
    height: 100%;
    overflow: hidden;
    border-radius: 12px;
    box-shadow: var(--soft-shadow);
    background-color: #fff;
    ${({active}) => active && 'transform: scale(1.1)'};
    opacity: ${({active}) => active ? '1' : '.7'};
    /* &:hover {
        transform: scale(1.2);
    } */
`

export const ImageContainer = styled.div`
    width: 100%;
    height: 12rem;
    position: relative;
`

export const Overlay = styled.div`
    position: absolute;
    top: 0; left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
`

export const Img = styled(Image)`
    object-fit: cover;
`

export const Year = styled.p`
    color: #fff;
    font-size: 4.5rem;
    font-weight: bold;
    position: absolute;
    top: 3rem;
    left: 2rem;
`

export const Text = styled.p`
    font-size: 1rem;
    padding: 2rem;
`