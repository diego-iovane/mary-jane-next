import styled from 'styled-components'
import Image from 'next/image'

export const Container = styled.div`
    height: 15rem;
    display: flex;
    justify-content: center;;
`

export const IllustrationsContainer = styled.div`

`

export const IllustrationInner = styled.div`
    position: relative;
    width: 20rem;
    height: 20rem;
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