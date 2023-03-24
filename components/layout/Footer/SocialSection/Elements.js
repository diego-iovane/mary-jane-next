import styled from 'styled-components'
import Image from 'next/image'

export const Section = styled.section`
    min-height: 10rem;
    padding: 4rem 0;
    background-color: var(--black);
    position: relative;

    &:after {
        content: '';
        position: absolute;
        left: 50%;
        bottom: 0;
        transform: translateX(-50%);
        height: .2rem;
        width: 10rem;
        background-color: black;
        border-radius: 500px;
    }
`

export const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const Title = styled.h2`
    text-align: center;
    font-size: var(--desktop-title-font-size);
    color: #ffffff;
`

export const IconsContainer = styled.div`
    width: 12rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1rem;
    place-items: center;
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