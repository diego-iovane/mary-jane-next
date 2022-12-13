import styled from 'styled-components'
import Image from 'next/image'

export const Section = styled.section`
    height: 25rem;
    width: 100%;
    position: relative;
    box-shadow: var(--soft-shadow);
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
    transform: translate(-50%,-50%);
    display: flex;
    flex-direction: column;
`

export const Inner = styled.div`
    width: 100%;
`

export const Title = styled.p`
    font-size: 1.5rem;
`

export const InputContainer = styled.div`
    margin: 1rem 0;
    width: 100%;
    position: relative;
`

export const Input = styled.input`
        width: 75%;
        border: 1px solid var(--soft-lines-color);
        border-radius: 4px;
        padding: .6rem .8rem;
        box-shadow: var(--soft-shadow);

        &&::placeholder {
            color: var(--soft-color);
            font-family: var(--text-font);
        }
`

export const Button = styled.button`
    width: 20%;
    border: 1px solid var(--soft-lines-color);
    border-radius: 4px;
    opacity: ${({dis}) => dis ? ".5" : "1"};
    cursor: ${({dis}) => dis ? "default" : "pointer"};
`

export const ButtonIcon = styled.svg`
    width: 1rem;
    height: 1rem;

    path {
        /* fill:  */
    }
`