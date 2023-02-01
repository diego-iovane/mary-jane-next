import styled from 'styled-components'
import Image from 'next/image'

export const Section = styled.section`
    padding: 5rem 0 2rem 0;
`

export const Inner = styled.div`
    max-width: var(--section-max-width);
    width: var(--section-width);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
`

export const Head = styled.div`
    display: flex;
    align-items: center;
    align-self: flex-start;
`

export const ButtonContainer = styled.div`
    position: relative;
    bottom: 1rem;
    margin-left: 1rem;
`

export const SectionTitle = styled.h2`
    font-size: 2.5rem;
    align-self: flex-start;
    margin-bottom: 1.5rem;
    margin-right: 1rem;
    font-size: var(--desktop-title-font-size);
` 

export const LogosContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    @media all and (min-width: 950px) and (max-width: 1150px) {
        width: 75%;
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