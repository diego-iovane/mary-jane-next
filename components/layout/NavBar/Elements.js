import styled from 'styled-components'
import Image from 'next/image'
import { motion } from 'framer-motion'

export const Container = styled(motion.header)`
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 999;
    transition: all .5s ease-in-out;
    
    box-shadow: ${({scrolled}) => scrolled ? '0px 2px 9px 3px rgba(0, 0, 0, 0.2)' : 'none'};
    background-color: ${({scrolled}) => scrolled ? 'var(--bg-color)' : 'transparent'};
`

export const Inner = styled.div`
    margin: 0 auto;
    width: 100%;
    max-width: calc(var(--section-max-width) + 5rem);
    display: flex;
    justify-content: space-between;
`

export const Left = styled.div`
    display: flex;
`

export const Right = styled.div`
    display: flex;

    @media all and (max-width: 960px) {
        justify-content: center;
        align-items: center;
    }
`

export const LogoContainer = styled.div`
    position: relative;
    width: ${({scrolled}) => scrolled ? '4rem' : '5rem'};
    height: ${({scrolled}) => scrolled ? '3.5rem' : '4rem'};
    display: flex;
    justify-content: center;
    align-self: center;
    cursor: pointer;
    transition: all .5s ease-in-out;
    z-index: 10;
`

export const Logo = styled(Image)`
    object-fit: contain;
`

export const Nav = styled.nav`
    display: flex;
    margin-top: ${({scrolled}) => scrolled ? '0' : '1rem'};
    position: relative;
    transition: all .5s ease-in-out;
    align-items: center;

    @media all and (max-width: 960px) {
        display: none;
    }
`

export const Links = styled.ul`
    display: flex;
    justify-content: space-between;
    margin: 1rem 0;
`

export const LinkContainer = styled.li`
    margin-left: 2.5rem;
    transition: opacity .2s ease-in-out;
    font-size: .7rem;
    color: #ffffff;
    display: flex;
    align-items: center;

    a {
        color: ${({scrolled}) => scrolled ? 'var(--text-color)' : '#ffffff'};
    }

    &:hover {
        opacity: .7;
    }

    &:first-child {
        padding-left: 0;
    }
`

export const TicketsBtn = styled.div`
    background-color: var(--green);
    font-size: .7rem;
    width: 7rem;
    height: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    border-radius: 50px;
    margin: 0 .3rem;
    cursor: pointer;

    transition: opacity .5s ease-in-out;

    &:hover {
        opacity: .8;
    }
`

export const StandBtn = styled.div`
    background-color: var(--pink);
    font-size: .7rem;
    width: 7rem;
    height: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    border-radius: 50px;
    margin: 0 .3rem;
    cursor: pointer;

    transition: opacity .5s ease-in-out;

    &:hover {
        opacity: .8;
    }
`