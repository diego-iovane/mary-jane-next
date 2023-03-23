import styled from 'styled-components'
import Image from 'next/image'
import { motion } from 'framer-motion'

export const Section = styled.section`
    background: rgba(228, 228, 228, 0.4);
    width: 100%;
`

export const Inner = styled(motion.div)`
    width: var(--section-width);
    max-width: var(--section-max-width);
    margin: 0 auto;
    height: 100%;
    display: flex;
    align-items: flex-end;
    padding: 7rem 0;
`

export const Grid = styled.div`
    width: 95%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
`

export const Card = styled.div`
    padding: 1rem;
    display: grid;
    grid-template-columns: .5fr 2fr;
    box-shadow: var(--soft-shadow);
    border-radius: 12px;
`

export const ImageContainer = styled.div`
    position: relative;
    width: 5rem;
    height: 5rem;
    margin-right: 1rem;
    border-radius: 500px;
    overflow: hidden;
`

export const Img = styled(Image)`
    object-fit: cover;
`

export const CardText = styled.p`
    display: flex;
    align-items: center;
`