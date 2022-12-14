import React from 'react'
import { GetContentContext } from '../../context/ContentContext'
import {
    Section,
    Inner,
    SectionTitle,
} from './Elements'

const MediaSponsorsSection = () => {

    const { content } = GetContentContext()

    // console.log(content)

    return (
        <Section>
            {
                Object.entries(content).length !== 0 &&
                <Inner>
                    <SectionTitle>{content.mediaSponsorsSection.title}</SectionTitle>
                </Inner>
            }
        </Section>
    )
}

export default MediaSponsorsSection