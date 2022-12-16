import React from 'react'
import { GetContentContext } from '../../context/ContentContext'
import {
    Section,
    Inner,
    Left,
    Right,
    SectionTitle,
    SectionText,
    ImageContainer,
    Img,
} from './Elements'

const GrowSection = () => {

    const { content } = GetContentContext()

    return (
        <Section>
            {
                Object.entries(content).length !== 0 &&
                <Inner>
                    <Left>
                        <SectionTitle>{content.growSection.title}</SectionTitle>
                        <SectionText dangerouslySetInnerHTML={{ __html: content.growSection.text }} />
                    </Left>
                    <Right>
                        <ImageContainer>
                            <Img
                                src={content.growSection.img.src}
                                alt={content.growSection.img.alt}
                                fill
                            />
                        </ImageContainer>
                    </Right>
                </Inner>
            }
        </Section>
    )
}

export default GrowSection