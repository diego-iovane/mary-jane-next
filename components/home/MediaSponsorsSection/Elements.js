import styled from 'styled-components'
import Image from 'next/image'

export const Section = styled.section`
    padding: 5rem 0;
    /* background-color: var(--bg-gray); */
`

export const Inner = styled.div`
    max-width: var(--section-max-width);
    width: var(--section-width);
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
    font-size: var(--desktop-title-font-size);
    margin-bottom: 1.5rem;
    margin-right: 1rem;
    align-self: flex-start;
` 

export const LogoContainer = styled.div`
    position: relative;
    height: 9rem;
    width: 9rem;
    padding: .5rem;
    border-radius: 500px;
    background: linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.44) 100%);
`

export const Logo = styled(Image)`
    object-fit: contain;
`