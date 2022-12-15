import styled from 'styled-components'
import Image from 'next/image'

export const Section = styled.section`
    padding: 5rem 0 2rem 0;
`

export const Inner = styled.div`
    max-width: var(--section-max-width);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const SectionTitle = styled.h2`
    font-size: var(--desktop-title-font-size);
    padding-bottom: 2rem;
    border-bottom: 1px solid #000000;
    margin-bottom: 1.5rem;
` 

export const LogosContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 70%;

    @media all and (max-width: 650px) {
        width: 100%;
    }
`

export const LogoContainer = styled.div`
    position: relative;
    width: 10rem;
    height: 10rem;
    margin: 0 2rem;
`

export const Logo = styled(Image)`
    object-fit: contain;
`