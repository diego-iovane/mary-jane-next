import styled from 'styled-components'
import { motion } from 'framer-motion'
import Image from 'next/image'

export const Button = styled(motion.a)`
    position: fixed;
    bottom: 10px;
    right: 10px;
    width: 4rem;
    height: 4rem;
    border-radius: 500px;
    background-color: var(--light-green);
    z-index: 100;
    display: none;
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.5);

    /* opacity: ${({ appear }) => appear ? "1" : "0"}; */

    svg {
        width: 2rem;
        height: 2rem;
        transform: rotate(35deg);

        path {
            fill: #ffffff;
        }
    }

    @media all and (max-width: 500px) {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

export const ImgContainer = styled.div`
    position: relative;
    width: 3rem;
    height: 3rem;
`

export const Img = styled(Image)`
    object-fit: contain;
`