import styled from 'styled-components'
import Image from 'next/image'
import { motion } from 'framer-motion'

export const Inner = styled(motion.div)`
    width: var(--section-width);
    max-width: var(--section-max-width);
    margin: 0 auto;
    height: 100%;
    display: flex;
    align-items: flex-end;
    padding: 7rem 0;
`

export const Container = styled.div`
    width: 100%;
    padding: 2rem 1rem;
    display: grid;
    grid-template-columns: .5fr 2fr;
    box-shadow: var(--soft-shadow);
    border-radius: 12px;
`

export const ImageContainer = styled.div`
    position: relative;
    width: 15rem;
    height: 15rem;
    margin-right: 1rem;
    border-radius: 500px;
    overflow: hidden;
    right: 3rem;
`

export const Img = styled(Image)`
    object-fit: cover;
`

export const Content = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`

export const CardTitle = styled.h2`
    margin-bottom: 1rem;
`

export const CardText = styled.p`
    font-size: .9rem;
    display: flex;
    align-items: center;
    width: 90%;
`