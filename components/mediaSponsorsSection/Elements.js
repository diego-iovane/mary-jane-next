import styled from 'styled-components'
import Image from 'next/image'

export const Section = styled.section`
    margin-bottom: 6rem;
    padding: 5rem 0;
    background-color: var(--bg-gray);
`

export const Inner = styled.div`
    max-width: var(--section-max-width);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    &:hover .arrow {
        opacity: 1;
        bottom: 0;
    }
`

export const SectionTitle = styled.h2`
    font-size: var(--desktop-title-font-size);
    padding-bottom: 2rem;
    border-bottom: 1px solid #000000;
    margin-bottom: 1.5rem;
` 

export const LogoContainer = styled.div`
    position: relative;
    width: 100%;
    height: 4rem;
`

export const Logo = styled(Image)`
    object-fit: contain;
`