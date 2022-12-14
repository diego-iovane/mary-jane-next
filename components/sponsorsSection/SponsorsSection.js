import React from 'react'
import { GetContentContext } from '../../context/ContentContext'
import {
    Section,
    Inner,
    SectionTitle,
} from './Elements'

const SponsorsSection = () => {

    const { content } = GetContentContext()

    return (
        <Section>
            {
                Object.entries(content).length !== 0 &&
                <Inner>
                    <SectionTitle>{content.sponsorsSection.title}</SectionTitle>
                </Inner>
            }
        </Section>
    )
}

export default SponsorsSection