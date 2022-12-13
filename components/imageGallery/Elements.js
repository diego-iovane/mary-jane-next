import styled from 'styled-components'
import Image from 'next/image'

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

export const ImgContainer = styled.div`
    position: relative;
    width: 100%;
    height: 15rem;
`

export const Img = styled(Image)`
    width: 100%;
    height: 15rem;
    object-fit: cover;
`