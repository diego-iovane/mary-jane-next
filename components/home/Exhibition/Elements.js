import styled from 'styled-components'
import Image from 'next/image'
import { motion } from 'framer-motion'

export const Section = styled.section`
    padding: 5rem 0 2rem 0;
`

export const Inner = styled(motion.div)`
    width: var(--section-width);
    max-width: var(--section-max-width);
    margin: 0 auto;
    position: relative;
    display: flex;

    @media all and (max-width: 450px) {
        flex-direction: column;
    }
`

export const Content = styled(motion.div)`
    width: 41rem;
`

export const Title = styled.h2`
    font-size: 3.5rem;
    line-height: 1.2;
`

export const Text = styled.p`
    margin: 2rem 0;
`

export const Images = styled(motion.div)`
    width: 50%;
    position: relative;

    &:hover .small-arrows {
        opacity: 1;
        top: 40%;
    }
`

export const InstaCard = styled.div`
    width: 100%;
    height: 100%;
    background-color: #ffffff;
    position: relative;
    border-radius: 5px;
    box-shadow: var(--light-shadow);
    padding: .3rem .3rem 1.5rem .3rem;
    border: 1px solid #ededed;
`

export const InstaImgContainer = styled.div`
    position: relative;
    width: 100%;
    height: 95%;
    margin: 0 auto;
    background-color: #ededed;
`

export const InstaImg = styled(Image)`
    object-fit: cover;
`

export const InstaText = styled.p`
    font-size: 1.5rem;
    text-align: center;
    font-family: 'Rock Salt', cursive;
`

export const IconContainer = styled.div`
    width: 2rem;
    margin: 1rem auto 0 auto;
    position: relative;
`

export const Icon = styled(motion.div)`
    width: 2rem;
    height: 2rem;
    position: relative;
    transform: ${({rotate}) => rotate ? 'rotateZ(60deg)' : 'rotateZ(0)'};
    transition: all .2s ease-in-out;
`

export const Img = styled(Image)`
    object-fit: contain;
`

export const IconTxt = styled.p`
    font-size: .6rem;
`

export const ButtonsContainer = styled.div`
    position: absolute;
    top: 42%;
    left: 50%;
    transform: translateX(-50%);
    width: 70%;
    display: flex;
    justify-content: space-between;
    z-index: 50;
    opacity: 0;
    transition: all .3s ease-in-out;
`

export const Button = styled.button`
    width: 2rem;
    height: 2rem;
    background-color: #ffffff;
    border-radius: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transform: ${({right}) => right ? 'rotate(180deg)' : null};

    svg {
        width: 1.2rem;
        height: 1.2rem;
        fill: var(--pink);
    }
`