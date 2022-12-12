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

export const Overlay = styled.div`
    position: absolute;
    top: 0; left: 0; bottom: 0; right: 0;
    background-color: rgba(0, 0, 0, 0.7);
`

export const HeroTitle = styled.h1`
    position: absolute;
    bottom: 0;
    left: var(--desktop-section-padding);
    font-size: 7rem;
    font-weight: 500;
    color: #ffffff;
`

export const Inner = styled.div`
    max-width: var(--section-max-width);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    padding: 0 var(--desktop-section-padding);

    @media all and (max-width: 540px) {
        padding: 0 var(--mobile-section-padding);
    }
`

export const SectionsTagContainer = styled.div`
    width: 100%;
    position: sticky;
    top: 0;
    left: 0;
    /* box-shadow: var(--soft-shadow); */
`

export const SectionsTags = styled.div`
    display: flex;
`

export const SectionTag = styled.a`
    font-size: .8rem;
    padding: .4rem 1rem;
    margin: 1.5rem .5rem .5rem 0;
    cursor: pointer;
`

export const Title = styled.h3`
    font-size: 2rem;
    margin: 2rem 0;
    max-width: 35rem;
    line-height: 1.4;
`

export const Text = styled.p`
    font-size: .9rem;
    max-width: 35rem;
`

export const TextDecoration = styled.p`
    font-size: 3rem;
    font-weight: bold;
`

export const InfoSection = styled.div`

`

export const SectionElement = styled.div``