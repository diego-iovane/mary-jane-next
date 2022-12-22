import styled from 'styled-components'
import Image from 'next/image'

export const Section = styled.div`
    min-height: 22rem;
    width: 100%;
    position: relative;
    background-color: ${({ bg }) => bg ? bg : "#ffffff"};
`

export const BdSection = styled.div`
    width: 100%;
    margin: 0 auto;
    position: relative;
    background-color: ${({ bg }) => bg ? bg : "#ffffff"};
`

export const HeroImage = styled(Image)`
    object-fit: cover;
`

export const Overlay = styled.div`
    position: absolute;
    top: 0; left: 0; bottom: 0; right: 0;
    background-color: rgba(0, 0, 0, 0.7);
`

export const HeroContent = styled.div`
    position: absolute;
    height: 100%;
    max-width: var(--section-max-width);
    width: 70%;
    transform: translateX(-50%);
    left: 50%;
    top: 0;
    z-index: 10;
`

export const HeroTitle = styled.h1`
    position: relative;
    top: 28rem;
    transform: translateY(-130%);
    bottom: 0;
    left: 0;
    /* left: var(--desktop-section-padding); */
    font-size: 3rem;
    font-weight: 500;
    color: #ffffff;
`

export const Inner = styled.div`
    width: 80%;
    max-width: var(--section-max-width);
    margin: 0 auto;
    display: flex;
    position: relative;
    min-height: 25rem;

    @media all and (max-width: 540px) {
        padding: 0 var(--mobile-section-padding);
    }
`

export const Left = styled.div`
    position: relative;
    width: 50%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

export const Right = styled.div`
    position: relative;
    width: 50%;
`

export const GreenBox = styled.div`
    width: 22rem;
    border-radius: 5px;
    padding: 2rem;
    background-color: var(--middle-green);
`

export const GreenBoxText = styled.p`
    color: #ffffff;
    font-size: .9rem;
`

export const HandContainer = styled.div`
    position: absolute;
    bottom: 1rem;
    left: 8rem;
`

export const HandInner = styled.div`
    width: 7rem;
    height: 7rem;
    position: relative;
`

export const Hand = styled(Image)`
    object-fit: contain;
`

export const FeaturesList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    align-items: space-around;
    justify-content: center;
    height: 13rem;
    margin: 3rem 0 15rem 0;
`

export const Item = styled.li`
    display: flex;
    align-items: center;
`

export const IconContainer = styled.div`
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 1.5rem;
    position: relative;
`

export const Icon = styled(Image)`
    object-fit: contain;
`

export const FeaturesText = styled.p`
    width: 28rem;
    font-family: 'Oswald', sans-serif;
    line-height: 1;
    font-size: 2rem;
    color: #435a65;
`

export const FeaturesImg = styled.div`
    position: relative;
`

export const HandIllustrationContainer = styled.div`

`

export const HandIllustration = styled(Image)`
    object-fit: contain;
`