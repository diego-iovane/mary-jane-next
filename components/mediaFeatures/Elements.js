import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'

export const Section = styled.section`
    min-height: 10rem;
    padding: 5rem 0;
`

export const Inner = styled.div`
    max-width: var(--section-max-width);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Title = styled.h3`
    padding-bottom: 1.5rem;
    margin-bottom: 2.5rem;
    border-bottom: 1px solid rgb(0, 0, 0);
`

export const Carousel = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

export const LogoContainer = styled(Link)`
    width: 9rem;
    height: 1.5rem;
    position: relative;
    margin: 0 1.5rem;
    cursor: pointer;

    @media all and (max-width: 850px) {
        margin-bottom: 1.5rem;
    }
`

export const Logo = styled(Image)`
    object-fit: contain;
`