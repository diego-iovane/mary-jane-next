import styled from 'styled-components'
import Image from 'next/image'

export const Section = styled.section`
    padding: 5rem 0 0 0;
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
    margin-bottom: 1.5rem;
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
    padding: 1rem;
    border-radius: 500px;
    background: linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.44) 100%);
    overflow: hidden;
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
    background-color: var(--pink);
    border-radius: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 4rem;
    height: 4rem;

    svg {

        width: 2rem;
        height: 2rem;

        path {
            fill: #ffffff;
        }
    }
`