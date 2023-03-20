import styled from 'styled-components'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export const HeadSection = styled.div`
    height: 12rem;
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;

    &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.79) 0%, rgba(0, 0, 0, 0.29) 50%, rgba(255, 255, 255, 0.22) 75%, #F7F7F7 100%);
    }
`

export const HeadBg = styled(Image)`
    object-fit: cover;
`

export const Body = styled.div`
    width: 100%;
    padding-bottom: 4rem;
`

export const Inner = styled(motion.div)`
    width: var(--section-width);
    max-width: var(--section-max-width);
    margin: 1rem auto 2rem auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3rem;
    background: #FFFFFF;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
`

export const LeftContent = styled.div`
    width: 50%;
`


export const Title = styled.h1`
    width: 100%;
    padding-bottom: 1rem;
    border-bottom: 1px dashed #1E411D;
    margin-bottom: 1rem;
    font-size: 2.5rem;
`

export const TitleAlt = styled.h2`
    width: 100%;
    padding-bottom: 1rem;
    border-bottom: 1px dashed #1E411D;
    margin-bottom: 1rem;
    font-size: 2rem;
`

export const Text = styled.p`
    line-height: 2;
    margin-bottom: 1rem;
`

export const ButtonContainer = styled(Link)`

`

export const RightContent = styled.div`
    width: 27rem;
    height: 20rem;
    margin-right: 3%;
    position: relative;
`

export const ImageContainer = styled.div`
    width: 100%;
    height: auto;
`

export const Img = styled(Image)`
    object-fit: cover;
`