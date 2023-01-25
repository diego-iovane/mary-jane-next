import styled from 'styled-components'
import Image from 'next/image'

export const Section = styled.section`
    min-height: var(--section-min-height);
    padding: 5rem 0;
    /* background-color: var(--light-blue); */
`

export const Inner = styled.div`
    width: 90%;
    position: relative;
    max-width: var(--section-max-width);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    &:hover .arrow {
        opacity: 1;
        bottom: 0;
    }
`

export const HoverableArea = styled.div`
    width: 100%;
`

export const SectionTitle = styled.h2`
    font-size: var(--desktop-title-font-size);
    padding-bottom: 2rem;
    border-bottom: 1px solid var(--black);
    margin-bottom: 1.5rem;
    line-height: 1.1;
` 

export const Frame = styled.div`
    border-radius: 5px;
    background-color: #ffffff;
    height: 30rem;
    padding: .5rem .5rem 4rem .5rem;
    box-shadow: var(--light-shadow);
    position: relative;
`

export const AnchorOverlay = styled.a`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 20;
    cursor: pointer;
`

export const ImgContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`

export const Img = styled(Image)`
    object-fit: cover;
`

export const VideoContainer = styled.div`
    overflow: hidden;
    width: 100%;
    height: 100%;
`

export const Video = styled.video`
    height: 100%;
    width: 100%;
    object-fit: cover;
`

export const ButtonsContainer = styled.div`
    @media all and (max-width: 450px) {
        display: none;
    }
`

export const CtaContainer = styled.div`
    margin: 2rem auto;
    display: flex;
    flex-direction: column;
`

export const CtaTitle = styled.h2`
    margin: 4rem 0;
    text-align: center;
`

export const CtaSubTitle = styled.h4`
    text-align: center;
    font-size: 1.5rem;
    margin-bottom: 2rem;
`

