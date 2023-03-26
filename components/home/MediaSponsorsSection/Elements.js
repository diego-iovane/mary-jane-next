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
`

export const Head = styled.div`
    display: flex;
    align-items: center;
    align-self: flex-start;
    margin-bottom: 1.5rem;

    @media all and (max-width: 600px) {
        flex-direction: column;
        align-items: flex-start;
    }
`

export const ButtonContainer = styled.div`
    position: relative;
    bottom: 1rem;
    margin-left: 1rem;

    @media all and (max-width: 600px) {
        margin-left: 0;
        bottom: 0;   
    }
`

export const SectionTitle = styled.h2`
    font-size: var(--desktop-title-font-size);
    margin-bottom: 1.5rem;
    margin-right: 1rem;
    align-self: flex-start;
`

export const LogoContainer = styled.div`
    position: relative;
    margin: 0 auto;
    height: 9rem;
    width: 9rem;
    padding: .5rem;
    border-radius: 500px;
    background-color: #fff;
    overflow: hidden;
`

export const Logo = styled(Image)`
    object-fit: contain;
    width: 90% !important;
    height: 90% !important;
    left: 50% !important;
    top: 50% !important;
    transform: translate(-50%, -50%);
`

export const SwiperButtonsContainer = styled.div`
    position: absolute;
    width: 100%;
    top: 54%;
    transform: translateY(-50%);

    @media all and (max-width: 450px) {
        display: none;
    }
`