import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'

export const Section = styled.div`
    min-height: 22rem;
    width: 100%;
    position: relative;
    background-color: ${({ bgColor }) => bgColor ? bgColor : "#ffffff"};
`

export const HeroSection = styled.div`
    height: 22rem;
    width: 100%;
    position: relative;
`

export const HeroImage = styled(Image)`
    object-fit: cover;
`

export const HeroContent = styled.div`
    position: absolute;
    max-width: var(--section-max-width);
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
    height: 100%;
`

export const Overlay = styled.div`
    position: absolute;
    top: 0; left: 0; bottom: 0; right: 0;
    background-color: rgba(0, 0, 0, 0.7);
`

export const AnchorOverlay = styled.div`
    position: absolute;
    top: 0; left: 0; bottom: 0; right: 0;
    background-color: rgba(0, 0, 0, 0.7);
`

export const HeroTitle = styled.h1`
    position: absolute;
    bottom: 0;
    left: var(--desktop-section-padding);
    font-size: 7rem;
    font-weight: 500;
    color: #ffffff;
`

export const Inner = styled.div`
    max-width: var(--section-max-width);
    margin: 0 auto 5rem auto;
    display: flex;
    flex-direction: column;
    padding: 0 var(--desktop-section-padding);

    @media all and (max-width: 540px) {
        padding: 0 var(--mobile-section-padding);
    }
`

export const IllustrationsSectionContainer = styled.div`
    height: 30rem;
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;

    @media all and (max-width: 550px) {
        height: 40rem;
    }
`

export const IllustrationsContainer = styled.div`
    position: relative;
`

export const IllustrationInner = styled.div`
    position: absolute;
    width: 22rem;
    height: ${({ height }) => height ? height : "20rem"};
    left: ${({ left }) => left && left};
    top: ${({ top }) => top && top};

    @media all and (max-width: 550px) {
        left: ${({ leftMobile }) => leftMobile && leftMobile};
        top: ${({ topMobile }) => topMobile && topMobile};
    }
`

export const Illustration = styled(Image)`
    object-fit: contain;
`

export const Button = styled(Link)`
    background-color: #ffffff;
    font-size: 1.5rem;
    padding: .4rem 2rem;
    color: var(--pink);
    border-radius: 5px;
    border: 1px solid var(--pink);
    cursor: pointer;
    position: absolute;
    left: ${({left}) => left && left};
    top: ${({top}) => top && top};
    box-shadow: var(--soft-shadow);
    
    transition: opacity .2s ease-in-out;

    &:hover {
        opacity: .5;
    }
`

// GENERAL INFO

export const Title = styled.h3`
    font-size: 2rem;
    margin: 2rem 0;
    max-width: 35rem;
    line-height: 1.4;
    color: ${({ color }) => color && color};
`

export const Text = styled.p`
    font-size: .9rem;
    max-width: 35rem;
    color: ${({ color }) => color && color};
    margin-bottom: 2rem;

    p {
        margin-bottom: .5rem;
    }
`

export const TextDecoration = styled.p`
    font-size: 3rem;
    font-weight: bold;
`

export const SectionElement = styled.div``

export const ImgContainer = styled.div`
    position: relative;
    width: 100%;
    height: 30rem;

    @media all and (max-width: 500px) {
        height: 13rem;
    }
`

export const Img = styled(Image)`
    object-fit: contain;
`


// HALL PLAN
export const ButtonsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 2.5rem 0;
`

export const FileButton = styled.a`
    border-radius: 500px;
    border: 1px solid  ${({ color }) => color ? color : "#ffffff"};
    padding: .2rem 1rem;
    margin: .5rem;
    color: ${({ color }) => color ? color : "#ffffff"};
    cursor: pointer;
    transition: all .2s ease-in-out;

    &:hover {
        border: 1px solid var(--pink);
    }
`

// GUIDES

export const FilesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    background-color: var(--light-blue);
    border-radius: 15px;
    padding: 3rem;
    justify-content: space-between;
`

export const FileContainer = styled.div`
    width: 22%;
    margin-bottom: 2rem;

    @media all and (max-width: 780px) {
        width: 50%;
    }

    @media all and (max-width: 450px) {
        width: 100%;
    }

`

export const FileName = styled.p`

`

export const FileIcon = styled.a`
    svg {
        width: 4rem
    }
`