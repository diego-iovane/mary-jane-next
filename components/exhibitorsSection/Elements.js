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
    height: 10rem;
`

export const Logo = styled(Image)`
    object-fit: contain;
`

export const SwiperButtonsContainer = styled.div`
    position: absolute;
    width: 90%;
    display: flex;
    justify-content: space-between;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

export const Arrow = styled.button`
    position: relative;
    transform: ${({right}) => right && 'rotate(180deg)'};
    transition: all .2s ease-in-out;
    opacity: 0;
    bottom: .3rem;

    svg {

        width: 2rem;
        height: 2rem;

        path {
            fill: var(--pink)
        }
    }
`