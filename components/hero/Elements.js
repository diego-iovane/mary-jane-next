import styled from 'styled-components'

export const HeroSection = styled.div`
    height: 42rem;
    width: 100%;
    position: relative;
`

export const Content = styled.div`
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Title = styled.h1`
    color: #ffffff;
    text-align: center;
    font-size: 5.5rem;
    margin-top: 2.5rem;
    margin-bottom: 1.5rem;
    line-height: .5;
    border-bottom: 1px solid #ffffff;
    padding-bottom: 3.5rem;

    @media all and (max-width: 850px) {
        font-size: 4.5rem;
    }
`

export const SubTitle = styled.h2`
    color: var(--light-blue);
    text-align: center;
    font-size: 1.5rem;
`