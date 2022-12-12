import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'

export const Container = styled.div`
    height: 15rem;
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
`

export const IllustrationsContainer = styled.div`
    position: relative;
`

export const IllustrationInner = styled.div`
    position: absolute;
    width: 22rem;
    height: ${({height}) => height ? height : "20rem"};
    left: ${({left}) => left && left};
    top: ${({top}) => top && top};
`

export const Img = styled(Image)`
    object-fit: contain;
`

export const Overlay = styled.div`
    position: absolute;
    top: 0; left: 0; bottom: 0; right: 0;
    background-color: rgba(0, 0, 0, 0.7);
`

export const Content = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
`

export const Inner = styled.div`
`

export const Title = styled.p`
    font-size: 1.5rem;
`

export const Button = styled(Link)`
    background-color: #ffffff;
    font-size: 1.5rem;
    padding: .4rem 1.7rem;
    color: var(--pink);
    border-radius: 50px;
    border: 1px solid var(--pink);
    cursor: pointer;
    position: absolute;
    left: ${({left}) => left && left};
    top: ${({top}) => top && top};
    

    transition: opacity .5s ease-in-out;

    &:hover {
        opacity: .8;
    }
`