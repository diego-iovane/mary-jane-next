import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

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
`

export const SectionText = styled.p`
    text-align: center;
    font-size: .9rem;
    width: 85%;
    margin-bottom: 1.5rem;
`

export const Gallery = styled.div`
    width: 60rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
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
    }

    &:nth-child(2) {
        flex: 1 0 25rem;
        height: 20rem;
    }

    &:last-child {
        width: 25rem;
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
`

export const Title = styled.h3`
    border-bottom: 1px solid #ffffff;
    padding-bottom: 1rem;
    margin-bottom: 1rem;
`

export const Text = styled.p`
    font-size: .9rem;
`