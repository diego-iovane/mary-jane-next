import styled from 'styled-components'
import Image from 'next/image'

export const Section = styled.section`
    min-height: var(--section-min-height);
    padding: 5rem 0;
    background-color: var(--light-blue);
`

export const Inner = styled.div`
    max-width: var(--section-max-width);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const SectionTitle = styled.h2`
    font-size: 2.5rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid #000000;
    margin-bottom: 1.5rem;

    @media all and (max-width: 450px) {
        padding-bottom: 1rem;
        line-height: 1.2;
        width: 90%;
    }
`

export const SectionText = styled.p`
    text-align: center;
    font-size: .9rem;
    width: 42rem;
    margin-bottom: 2rem;

    @media all and (max-width: 1000px) {
        width: 80%;
        text-align: left;
    }

    @media all and (max-width: 450px) {
        width: 90%;
    }
`

export const Gallery = styled.div`
    width: 60rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    @media all and (max-width: 1000px) {
        width: 80%;
    }

    @media all and (max-width: 450px) {
        width: 90%;
    }
`

export const ImgContainer = styled.div`
    width: 17.5rem;
    height: 15rem;
    position: relative;
    overflow: hidden;
    cursor: pointer;

    &:first-child {
        flex: 1 0 35rem;
        height: 20rem;

        @media all and (max-width: 1000px) {
            width: 100%;
            height: 15rem;
            flex: 1;
        }
    }

    &:nth-child(2) {
        flex: 1 0 25rem;
        height: 20rem;

        @media all and (max-width: 1000px) {
            width: 100%;
            height: 15rem;
            flex: 1;
        }
    }

    &:last-child {
        width: 25rem;
        
        @media all and (max-width: 1000px) {
            width: 100%;
            height: 15rem;
        }
    }

    @media all and (max-width: 1000px) {
        width: 100%;
        height: 15rem;
    }
`

export const Overlay = styled.div`
    position: absolute;
    top: 0; left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    pointer-events: none;
`

export const Img = styled(Image)`
    object-fit: cover;
    transition: all .5s ease-in-out;

    &:hover {
        transform: scale(1.2)
    }
`

export const Content = styled.div`
    position: absolute;
    top: 0; left: 0;
    width: 100%;
    color: #ffffff;
    overflow: hidden;
    padding: 2rem;
    pointer-events: none;
    /* display: flex; */
    /* flex-direction: column; */

    @media all and (max-width: 1000px) {
        padding: 5rem;
    }
`

export const Title = styled.h3`
    border-bottom: 1px solid #ffffff;
    padding-bottom: 1rem;
    margin-bottom: 1rem;
`

export const Text = styled.p`
    font-size: .8rem;
`