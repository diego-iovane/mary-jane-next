import styled from 'styled-components'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

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

export const Body = styled.div`
    width: 100%;
`

export const Inner = styled(motion.div)`
    width: var(--section-width);
    max-width: var(--section-max-width);
    margin: 0 auto;
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

export const Subtitle = styled.p`
    font-size: 1.2rem;
    position: relative;
    left: 5px;
`

export const HeaderButtonContainer = styled(Link)`
    position: absolute;
    right: 0;
    bottom: 1rem;
`

export const InnerSection = styled.div`
    display: flex;
`

export const LeftContainer = styled.div`
    width: 50%;
`

export const Text = styled.p`
    line-height: 1.5;
    font-size: .9rem;
`

export const ButtonsContainer = styled.div`
    display: flex;
    margin-top: 1rem;
`

export const ButtonContainer = styled(Link)`
    margin-right: 1rem;
`


export const RightContainer = styled.div`
    width: 22rem;
    height: 29rem;
    margin-top: 1rem;
    margin-left: 10%;
    position: relative;
`

export const Img = styled(Image)`
    object-fit: cover;
    box-shadow: var(--soft-shadow);
`

// FEATURES

export const FeaturesSection = styled.section`

`

export const Grid = styled.div`
    margin: 7rem 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-auto-rows: 125px;
    grid-gap: 30px;
`

export const GridItem = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: var(--soft-shadow);
    border-radius: 15px;
    padding: 1rem;
`

export const GridIconContainer = styled.div`
    width: 3rem;
    height: 3rem;
    position: relative;
    margin-right: 1.5rem;
`

export const GridIcon = styled(Image)`
    object-fit: contain;
`

export const GridText = styled.p`
    font-size: .8rem;
    width: 80%;

    span {
        font-weight: bold;
    }
`

// LOCATION
export const LocationTitle = styled.h2`
    margin-bottom: 1.5rem;
`

export const LocationSubtitle = styled.p`
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
`

export const LocationText = styled.p`
    line-height: 1.5;
    font-size: .9rem;
    margin-bottom: 1.5rem;
`

export const LocationButtonContainer = styled(Link)``