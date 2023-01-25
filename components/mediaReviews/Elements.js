import styled from 'styled-components'
import Image from 'next/image'

export const Section = styled.section`
    min-height: var(--section-min-height);
    padding: 5rem 0 1rem 0;
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
    font-size: 2.5rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid #000000;
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
    background-color: var(--soft-gray);
    padding: 1rem 2rem;
    border-radius: 7px;
    min-height: 17rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* transform: scale(.9); */
    /* PARA ACTIVA: */
    /* transform: scale(1.1); */
`

export const QuotesIcon = styled.svg`
    width: 2rem;
    height: 2rem;
    
    path { 
        fill: var(--light-green);
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