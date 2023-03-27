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

export const BgGreen = styled.div`
    width: 30rem;
    height: 30rem;
    background: radial-gradient(50% 50% at 50% 50%, rgba(147, 194, 68, 0.40) 0%, rgba(147, 194, 68, 0) 100%);
    position: absolute;
    top: 10rem;
    left: 35rem;
`

export const BgPink = styled.div`
    width: 30rem;
    height: 30rem;
    background: radial-gradient(50% 50% at 50% 50%, rgba(226, 123, 175, 0.20) 0%, rgba(226, 123, 175, 0) 100%);
    position: absolute;
    top: 1rem;
    left: 6rem;
`

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
    margin-left: 12%;
    position: relative;

    @media all and (max-width: 1000px) {
        height: 37rem;
    }
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
export const LocationSection = styled.div`
    background: rgba(228, 228, 228, 0.4);
    position: relative;
    padding: 7rem 0;
    margin-bottom: 7rem;
`

export const LocationInner = styled(motion.div)`
    width: var(--section-width);
    max-width: var(--section-max-width);
    margin: 0 auto;
    position: relative;
    display: flex;
`

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

export const LocationRightContainer = styled.div`
    width: 28rem;
    height: 20rem;
    position: relative;
    margin-left: 10%;
`

export const ImageContainer = styled.div`
    width: 100%;
    height: auto;
`

export const GalleryImage = styled(Image)`
    object-fit: cover;
`

// Onboarding
export const OnboardingTitle = styled.h2`
    width: 100%;
    text-align: center;
    margin-bottom: 1.5rem;
`

export const OnboardingSubtitle = styled.p`
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
    text-align: center;
`

export const StepsContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    margin-top: 4rem;
    margin-bottom: 7rem;
    left: 50%;
    transform: translateX(-50%);
    width: 50%;

    @media all and (max-width: 1050px) {
        width: 65%;
    }
`

export const StepContainer = styled(motion.div)`
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    position: relative;
    z-index: 10;
`

export const StepNum = styled(motion.div)`
    color: #fff;
    background-color: var(--green);
    width: 3rem;
    min-width: 3rem;
    height: 3rem;
    border-radius: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 1.5rem;
`

export const StepText = styled(motion.p)`
    font-weight: bold;

    a {
        border-bottom: 1px solid var(--green);
    }
`

export const Line = styled(motion.div)`
    position: absolute;
    height: 85%;
    width: .1rem;
    background-color: var(--green);
    top: 15px;
    left: 23px;
`