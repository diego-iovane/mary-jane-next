import styled from 'styled-components'

export const DropdownContainer = styled.div`
    position: relative;
    margin-left: 2.5rem;
    display: flex;
    align-items: center;

    @media all and (max-width: 960px) {
        margin-top: 1rem;
        margin-right: .8rem;
    }
`

export const Button = styled.button`
    position: relative;
    width: 2rem;
    height: 2rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
`

export const DropdownBox = styled.div`
    visibility: ${({opened}) => opened ? 'visible' : 'hidden'};
    position: absolute;
    top: 3.3rem;

    @media all and (max-width: 960px) {
        top: 0;
        right: 3.7rem;
    }
`

export const DropdownItem = styled.div`

`

export const FlagContainer = styled.div`
    width: 1.4rem;
    height: 1.4rem;
    display: flex;
    justify-content: center;
    align-items: center;

    @media all and (max-width: 960px) {
        width: 2rem;
        height: 2rem;
    }
`

export const Flag = styled.img`
    width: 100%;
    height: auto;
    object-fit: contain;
    cursor: pointer;
`

export const Arrow = styled.div`
    position: absolute;
    right: 0;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 6px solid #555;
    rotate: ${({opened}) => opened && 'x 180deg'};
    transition: rotate .5s;

    @media all and (max-width: 960px) {
        right: -17px;
    }
`