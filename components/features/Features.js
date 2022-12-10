import React from 'react'
import { GetContentContext } from '../../context/ContentContext'
import {
    Section,
    Inner,
} from './Elements'

const Features = () => {

    const { content } = GetContentContext()

    console.log(content)

    return (
        <Section>
            <Inner>

            </Inner>
        </Section>
    )
}

export default Features