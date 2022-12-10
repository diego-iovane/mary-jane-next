import styled from 'styled-components'
import Image from 'next/image'

export const Container = styled.header`
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 999;
    transition: all .5s ease-in-out;


    /* padding: .5rem 0; */
    /* box-shadow: 0px 2px 9px 3px rgba(0, 0, 0, 0.2); */
    /* background-color: #ffffff; */
`

export const Inner = styled.div`
    margin: 0 auto;
    width: 95%;
    max-width: var(--section-max-width);
    display: flex;
    justify-content: space-between;
`

export const Left = styled.div`
    display: flex;
`

export const Right = styled.div``

export const LogoContainer = styled.div`
    width: 5rem;
    display: flex;
    justify-content: center;
    align-self: center;
    cursor: pointer;
`

export const Logo = styled(Image)`
    width: 100%;
    height: auto;
    object-fit: cover;
`

export const Nav = styled.nav`
    display: flex;
    margin-top: 1rem;
    position: relative;
`

export const Links = styled.ul`
    display: flex;
    justify-content: space-between;
    margin: 1rem 0;
`

export const LinkContainer = styled.li`
    margin-left: 2.5rem;
    transition: opacity .2s ease-in-out;
    font-size: .8rem;
    color: #ffffff;
    display: flex;
    align-items: center;

    &:hover {
        opacity: .7;
    }

    &:first-child {
        padding-left: 0;
    }
`

export const ButtonContainer = styled.div`
    margin: 1rem 0 1rem 1rem;
    display: flex;
    align-items: center;
    position: absolute;
    top: -.8rem;
    right: -8rem;
`