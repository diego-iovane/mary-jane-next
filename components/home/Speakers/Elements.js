import styled from 'styled-components'
import Image from 'next/image'
import { motion } from 'framer-motion'

export const Section = styled(motion.section)`
    padding: 5rem 0;
`

export const Inner = styled(motion.div)`
    max-width: var(--section-max-width);
    width: var(--section-width);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    opacity: ${({isinview}) => isinview ? '1' : '0'};
    transition: opacity .2s ease-in-out;

    &:hover .arrow {
        opacity: 1;
        bottom: 0;
    }
`

export const Head = styled.div`
    display: flex;
    align-items: center;
    align-self: flex-start;
`

export const ButtonContainer = styled.div`
    position: relative;
    bottom: 1rem;
    margin-left: 1rem;
`

export const SectionTitle = styled.h2`
    font-size: var(--desktop-title-font-size);
    margin-bottom: 1.5rem;
    margin-right: 1rem;
    align-self: flex-start;
` 

export const LogoContainer = styled.div`
    position: relative;
    height: 12rem;
    width: 12rem;
    padding: .5rem;
    border-radius: 500px;
    background: linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.44) 100%);
    overflow: hidden;
`

export const Logo = styled(Image)`
    object-fit: cover;
`

export const NameContainer = styled(motion.div)`
    overflow: hidden;
    position: absolute;
    left: 0;
    bottom: 0;
    max-height: ${({isinview}) => isinview ? '100rem' : '0rem'};
    /* bottom: ${({isinview}) => isinview ? '0' : '-10px'}; */
    /* opacity: ${({isinview}) => isinview ? '1' : '0'}; */
    transition: all 3s ease-in-out .8s;
`

export const Name = styled.p`
    font-size: .9rem;
    margin: 0;
    color: #ffffff;
    background-color: var(--text-color);
    width: fit-content;
    padding: .3rem;
    overflow: hidden;
`

export const Surname = styled.p`
    font-weight: bold;
    margin: 0;
    font-size: 1.5rem;
    color: #ffffff;
    background-color: var(--text-color);
    width: fit-content;
    padding: .3rem;
    overflow: hidden;
`