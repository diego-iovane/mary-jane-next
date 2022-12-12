import React from 'react'
import { GetContentContext } from '../../../context/ContentContext'
import {
    Container,
    Inner,
    Content,
    Title,
} from './Elements'

const Visit = () => {

    const { content } = GetContentContext()

    console.log(content)

    return (
        <Container>
            {
                
            }
        </Container>
    )
}

export default Visit