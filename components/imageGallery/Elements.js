import styled from 'styled-components'
import Image from 'next/image'

export const Section = styled.section`
    min-height: var(--section-min-height);
    height: 50rem;
    padding: 5rem 0;
    background-color: var(--light-blue);
`

export const Inner = styled.div`
    width: 90%;
    /* height: 45rem; */
    /* height: 100%; */
    max-width: var(--section-max-width);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
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