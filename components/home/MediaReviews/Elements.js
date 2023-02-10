import styled from 'styled-components'
import Image from 'next/image'

export const Section = styled.section`
    min-height: var(--section-min-height);
    padding: 5rem 0 1rem 0;
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

export const SectionTitle = styled.h2`
    font-size: 2.5rem;
    align-self: flex-start;
    margin-bottom: 1.5rem;

    @media all and (max-width: 450px) {
        padding-bottom: 1rem;
        line-height: 1.2;
        width: 90%;
    }
`

export const ButtonsContainer = styled.div`
    @media all and (max-width: 450px) {
        display: none;
    }
`

// REVIEW
export const ReviewContainer = styled.div`
    position: relative;
    background: linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.65) 100%);
    border-radius: 12px;
    padding: 2rem;
    min-height: 17rem;
    display: flex;
    flex-direction: column;
    transform: ${({active}) => active ? 'scale(1.1)' : 'scale(.9)'};
    transition: transform .3s ease-in-out;
`

export const QuotesIcon = styled.svg`
    width: 2rem;
    height: 2rem;
    
    path { 
        fill: var(--pink);
    }
`

export const Text = styled.p`
    font-size: .8rem !important;

    p {
        @media all and (max-width: 450px) {
            font-size: .8rem; 
        }
    }
`

export const LogoPosition = styled.div`
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    width: 10rem;
    height: 2rem;
`

export const LogoContainer = styled.div`
    position: relative;
    height: 2.1rem;
    width: auto;
`

export const Logo = styled(Image)`
    object-fit: contain;
`