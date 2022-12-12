import styled from 'styled-components'
import Image from 'next/image'

export const Section = styled.section`
    height: 22rem;
    width: 100%;
    position: relative;
`

export const BgImg = styled(Image)`
    object-fit: cover;
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
    width: 100%;
`

export const Title = styled.p`
    font-size: 1.5rem;
`