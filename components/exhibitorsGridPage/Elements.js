import styled from 'styled-components'
import { motion } from 'framer-motion'
import Image from 'next/image'

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

export const Content = styled.div`
    width: 100%;
`

export const Inner = styled(motion.div)`
    width: var(--section-width);
    max-width: var(--section-max-width);
    margin: 3rem auto;
    min-height: 100vh;
`

export const InnerHead = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding-bottom: 1rem;
    border-bottom: 1px dashed #1E411D;
    margin-bottom: .5rem;`

export const Title = styled.h1`
    position: relative;
    top: 15px;
`

export const InputsContainer = styled.div`
    display: flex;
    align-items: center;
`

export const Search = styled.input`
    background-color: var(--soft-gray);
    border-radius: 20px;
    width: 15rem;
    height: 2.5rem;
    padding: 0 1rem;

    &::placeholder {
        color: #979797;
    }
`

export const Categories = styled.div`
    background-color: var(--soft-gray);
    border-radius: 20px;
    width: 15rem;
    height: 2.5rem;
    padding: 0 1rem;
    margin-right: 1rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: #979797;
    cursor: pointer;
    position: relative;
    font-size: .8rem;
`

export const Grid = styled.div`
    margin-top: 3rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-auto-rows: 200px;
    grid-gap: 30px;
`

export const GridItem = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const LogoContainer = styled.a`
    position: relative;
    width: 12rem;
    height: 12rem;
    background-color: ${({loading}) => loading ? '#ededed' : '#ffffff'};
    border-radius: 500px;
    overflow: hidden;
    cursor: pointer;
`

export const Logo = styled(Image)`
    object-fit: contain;
    opacity: ${({isLoading}) => isLoading ? '0' : '1'};
    transition: opacity .2s ease-in-out;
`

// CATEGORIES
export const CategoriesContainer = styled.div`
    position: absolute;
    top: 45px;
    max-height: ${({open}) => open ? '100rem' : '0rem'};
    left: 0;
    width: 100%;
    background-color: #ffffff;
    box-shadow: var(--soft-shadow);
    border-radius: 12px;
    z-index: 100;
    transition: all .2s ease-in-out;
    overflow: hidden;
    display: flex;
    flex-direction: column;
`

export const Categorie = styled.button`
    cursor: pointer;
    width: 100%;
    padding: 1rem;
    text-align: left;

    &:hover {
        background-color: var(--soft-gray);
    }
`