import styled from 'styled-components'
import { motion } from 'framer-motion'
import Image from 'next/image'

export const Section = styled.section`
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

export const InnerSection = styled.div`
    width: 100%;
    border-radius: 15px;
    box-shadow: var(--soft-shadow);
    display: flex;
    overflow: hidden;
    margin: 2rem 0;
    ${({reverse}) => reverse && 'flex-direction: row-reverse'};
`

export const FurnitureLeft = styled.div`
    width: 40%;
    position: relative;
    height: 100%;
`

export const ImageContainer = styled.div`
    height: 35rem;
    width: auto;
`

export const Img = styled(Image)`
    object-fit: cover;
`

export const FurnitureRight = styled.div`
    padding: 3rem 2rem;
    width: 60%;
`

export const Title = styled.h1`
    width: 100%;
    padding-bottom: 1rem;
    border-bottom: 1px dashed #1E411D;
    margin-bottom: 1rem;
    font-size: 2rem;
`

export const Subtitle = styled.p`
    margin: 1.5rem 0 1rem 0;
    font-size: 1.5rem;
`

export const SmallText = styled.p`
    font-size: .9rem;
`

export const DetailsContainer = styled.div`
    position: relative;
    margin: 2rem 0;
    display: flex;
    width: 100%;
    padding-bottom: 1rem;
    ${({dashed}) => dashed && 'border-bottom: 1px dashed #1E411D'};
    margin-bottom: 1rem;
`

export const Address = styled.p`
    width: 50%;
    line-height: 1.1;
    font-weight: bold;
`

export const DetailsList = styled.ul`
    width: 50%;
`

export const DetailItem = styled.li`
    margin-bottom: 1rem;
`

export const Footer = styled.div`

`