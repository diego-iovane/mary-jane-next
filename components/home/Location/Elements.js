import styled from 'styled-components'

export const Section = styled.section`
    padding: 4rem 0 8rem 0;
`

export const Inner = styled.div`
    max-width: var(--section-max-width);
    width: var(--section-width);
    margin: 0 auto;
    display: flex;
    position: relative;
`

export const MapContainer = styled.div`
    width: 50%;
`

export const Map = styled.div`
    width: 100%;
    height: 25rem;
    border-radius: 12px;
    box-shadow: 0px 2px 10px 2px rgba(0, 0, 0, 0.1);
    overflow: hidden;
`

export const DetailsContainer = styled.div`
    width: 50%;
    padding-left: 6rem;
`

export const Title = styled.h3`
    font-size: 1.8rem;
    margin-bottom: 1rem;
`

export const SubTitle = styled.h6`
    font-size: 1.4rem;
    font-weight: 400;
    margin-bottom: 1.2rem;
    line-height: 1.7;
`

export const Text = styled.p`
    font-size: .9rem;
    margin-bottom: .5rem;
`

export const ButtonContainer = styled.div`
    margin-top: 1.5rem;
`