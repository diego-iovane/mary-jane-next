import styled from 'styled-components'
import Image from 'next/image'

export const Section = styled.section`
    padding: 5rem 0 2rem 0;
`

export const Inner = styled.div`
    width: var(--section-width);
    max-width: var(--section-max-width);
    margin: 0 auto;
    position: relative;
    display: flex;

    @media all and (max-width: 450px) {
        flex-direction: column;
    }
`

export const Content = styled.div`
    width: 41rem;
`

export const Title = styled.h2`
    font-size: 3.5rem;
    line-height: 1.2;
`

export const Text = styled.p`
    margin: 2rem 0;
`

export const Images = styled.div`
    width: 50%;
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

export const InstaText = styled.p`
    font-size: 1.5rem;
    text-align: center;
    font-family: 'Rock Salt', cursive;
`