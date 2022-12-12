import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'

export const Section = styled.section`
    min-height: var(--section-min-height);
    padding: 3rem 0;
`

export const Inner = styled.div`
    max-width: var(--section-max-width);
    margin: 0 auto;
    display: flex;
    padding: 0 var(--desktop-section-padding);
    flex-wrap: wrap;
`

export const Title = styled.p`
    font-weight: bold;
    font-size: .8rem;
    margin: 2.5rem 0 1rem 0;
`

export const Text = styled.p`
    font-size: .8rem;
    line-height: 1;
`

export const Left = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-evenly;

    @media all and (max-width: 850px) {
        width: 100%;
    }
`

export const LeftLeft = styled.div`
    width: 50%;
`

export const LeftRight = styled.div`
    width: 50%;
    margin-left: 4%;
`

export const Right = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-evenly;

        
    @media all and (max-width: 850px) {
        width: 100%;
    }
`

export const RightLeft = styled.div`
    width: 50%;
    margin-left: 4%;

    @media all and (max-width: 850px) {
        margin-left: 0;
    }
`

export const RightRight = styled.div`
    width: 50%;
    margin-left: 4%;
    position: relative;

    @media all and (max-width: 850px) {
        bottom: 7rem;
    }
`

export const LogoContainer = styled.div`
    position: relative;
    width: 8rem;
    height: 8rem;
`

export const Logo = styled(Image)`
    object-fit: contain;
`

export const ScrubbleContainer = styled.div`
    width: 22rem;
    height: 20rem;
    position: absolute;
    top: 9rem;
    left: -1rem;

    @media all and (max-width: 850px) {
        width: 18rem;
        top: 4rem;
        left: 4rem;
    }
`

export const ScrubbleImg = styled(Image)`
    object-fit: contain;
`

export const Links = styled.ul`
    display: flex;
    flex-direction: column;
    margin: 2.5rem 0 1rem 0;
`

export const FooterLink = styled(Link)`
    font-size: .8rem;
    font-weight: bold;
    margin-bottom: .5rem;
`