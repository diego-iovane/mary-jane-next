import styled from 'styled-components'
import Image from 'next/image'

export const Section = styled.section`
    min-height: var(--section-min-height);
    padding: 2rem 0 0 0;
    display: flex;
    align-items: center;

    @media all and (max-width: 450px) {
        margin: 3rem auto;
    }
`

export const Inner = styled.div`
    max-width: var(--section-max-width);
    margin: 0 auto;
    display: flex;
    padding: 0 var(--desktop-section-padding);

    @media all and (max-width: 540px) {
        padding: 0 var(--mobile-section-padding);
    }
`

export const Left = styled.div`
    flex: 3;
`

export const SectionTitle = styled.h2`
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
`

export const SectionText = styled.p`
    font-size: .9rem;
`

export const Right = styled.div`
    flex: 1;
    position: relative;
    
    @media all and (max-width: 700px) {
        display: none;
    }
`

export const ImageContainer = styled.div`
    position: absolute;
    top: 50%;
    right: -12rem;
    transform: translateY(-50%);
    width: 23rem;
    height: 23rem;
`

export const Img = styled(Image)`
    object-fit: contain;
`

