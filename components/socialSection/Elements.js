import styled from 'styled-components'
import Image from 'next/image'

export const Section = styled.section`
    min-height: 10rem;
    padding: 7rem 0;
    background-color: var(--light-blue);
    position: relative;

    &:after {
        content: ' ';
        width: 100%;
        height: 1.4rem;
        background-color: var(--black);
        position: absolute;
        bottom: 0;
        left: 0;
    }
`

export const Inner = styled.div`
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Content = styled.div`

`

export const Title = styled.h2`
    text-align: center;
    font-size: var(--desktop-title-font-size);
`

export const IconsContainer = styled.div`
    width: 12rem;
    display: flex;
    justify-content: space-evenly;
    margin-top: 2rem;
`

export const IconContainer = styled.a`
    width: 2.4rem;
    height: 2.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`

export const Icon = styled(Image)`
    object-fit: contain;
`