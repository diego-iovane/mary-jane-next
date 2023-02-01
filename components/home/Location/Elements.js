import styled from 'styled-components'

export const Section = styled.section`
    padding: 0 0 1rem 0;

    min-height: 20rem;
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

export const LocationPinContainer = styled.div`

`

export const DetailsContainer = styled.div`
    width: 50%;
`