import styled from 'styled-components'
import { motion } from 'framer-motion'
import Image from 'next/image'

export const HeadSection = styled.div`
    height: 12rem;
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;

    &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.79) 0%, rgba(0, 0, 0, 0.29) 50%, rgba(255, 255, 255, 0.22) 75%, #F7F7F7 100%);
    }
`

export const HeadBg = styled(Image)`
    object-fit: cover;
`

export const Section = styled.section`
    padding: 0 0 5rem 0;
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
    /* ${({dashed}) => dashed && 'border-bottom: 1px dashed #1E411D'}; */
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