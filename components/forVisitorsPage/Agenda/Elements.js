import styled from 'styled-components'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export const Inner = styled(motion.div)`
    width: var(--section-width);
    max-width: var(--section-max-width);
    margin: 7rem auto;
    position: relative;
`

export const TitleContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    margin-bottom: 1rem;
`

export const Title = styled.h1`
    padding-bottom: 1rem;
    font-size: 2.5rem;
    color: var(--green);
`

export const Subtitle = styled.p`
    position: relative;
    bottom: 6px;
    margin-left: 1rem;
    font-size: 2rem;
    width: 25rem;
    font-weight: bold;
`

export const Content = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
`

export const Box = styled.div`
    box-shadow: var(--soft-shadow);
    padding: 2rem;
    border-radius: 12px;
`

export const BoxTitle = styled.p`
    font-size: 1.5rem;
    margin-bottom: .5rem;
`

export const BoxSubtitle = styled.p`
    font-size: 1rem;
`

export const Detail = styled.p`
    font-size: .9rem;
    margin-top: 1rem;

    span {
        font-weight: bold;
        margin-right: .5rem;
    }
`

export const Text = styled.p`
    line-height: 1.5;
    font-size: .9rem;
    width: 95%;
    margin: 1.5rem 0;
`