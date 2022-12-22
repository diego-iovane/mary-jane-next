import styled from 'styled-components'
import Image from 'next/image'

export const HeroSection = styled.div`
    height: 22rem;
    width: 100%;
    position: relative;
`

export const HeroImage = styled(Image)`
    object-fit: cover;
`

export const HeroContent = styled.div`
    position: absolute;
    max-width: var(--section-max-width);
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
    height: 100%;
`

export const Overlay = styled.div`
    position: absolute;
    top: 0; left: 0; bottom: 0; right: 0;
    background-color: rgba(0, 0, 0, 0.7);
`

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

export const HeroTitle = styled.h1`
    position: absolute;
    bottom: 1rem;
    left: var(--desktop-section-padding);
    font-size: 7rem;
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
    padding: 1rem 0;

    @media all and (max-width: 540px) {
        padding: 0 var(--mobile-section-padding);
    }
`