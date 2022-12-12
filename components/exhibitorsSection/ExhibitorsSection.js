import React from 'react'
import { GetContentContext } from '../../context/ContentContext'
import {
    Section,
    Inner,
    SectionTitle,
} from './Elements'

const ExhibitorsSection = () => {

    const { content } = GetContentContext()

    // console.log(content)

    return (
        <Section>
            {
                Object.entries(content).length !== 0 &&
                <Inner>
                    <SectionTitle>{content.exhibitorsGallery.title}</SectionTitle>
                </Inner>
            }
        </Section>
    )
}

export default ExhibitorsSection