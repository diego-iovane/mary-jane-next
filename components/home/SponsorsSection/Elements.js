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

    @media all and (max-width: 600px) {
        flex-direction: column;
        align-items: flex-start;
    }

    @media all and (max-width: 550px) {
        margin: 0 auto;
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

    @media all and (max-width: 550px) {
        margin: 0 auto;
    }
`

export const SectionTitle = styled.h2`
    font-size: 2.5rem;
    align-self: flex-start;
    margin-bottom: 1.5rem;
    margin-right: 1rem;
    font-size: var(--desktop-title-font-size);

    @media all and (max-width: 550px) {
        text-align: center;
        margin-right: 0;
    }
` 

export const LogosContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    /* width: 90%; */
    margin: 0 auto;

    @media all and (min-width: 950px) and (max-width: 1150px) {
        width: 75%;
    }
`

export const LogoContainer = styled.a`
    position: relative;
    width: 12rem;
    height: 12rem;
    margin: 0 2rem;
    cursor: pointer;

    @media all and (max-width: 600px) {
        width: 9rem;
        height: 10rem;
        margin: 0 1rem;
    }

    @media all and (max-width: 380px) {
        width: 7rem;
        height: 7rem;
    }
`

export const Logo = styled(Image)`
    object-fit: contain;
`