import styled from 'styled-components'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export const Inner = styled(motion.div)`
    width: var(--section-width);
    max-width: var(--section-max-width);
    margin: 0 auto;
    position: relative;
`

export const SectionHeader = styled.div`
    width: 100%;
    border-bottom: 1px dashed #1E411D;
    margin: 2rem 0;
    position: relative;
    padding-bottom: 1rem;
`

export const Title = styled.h1`
    width: 100%;
    padding-bottom: 1rem;
    font-size: 4.5rem;
`

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 5rem 0;
`

export const RightContainer = styled.div`

`

export const Subtitle = styled.p`
    font-size: 2rem;
    width: 25rem;
    font-weight: bold;
`

export const Text = styled.p`
    line-height: 1.5;
    font-size: .9rem;
    width: 95%;
    margin: 1.5rem 0;
`

export const ButtonsContainer = styled.div`
    display: flex;
    margin-top: 1rem;
`

export const ButtonContainer = styled(Link)``

export const LeftContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ImgContainer = styled.div`
    width: 25rem;
    height: 18rem;
    position: relative;
`

export const Img = styled(Image)`
    object-fit: cover;
    box-shadow: var(--soft-shadow);
`
