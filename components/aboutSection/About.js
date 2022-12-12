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

const About = () => {

    const { content } = GetContentContext()

    return (
        <Section id="about">
            {
                Object.entries(content).length !== 0 &&
                <Inner>
                    <Left>
                        <SectionTitle>{content.aboutSection.title}</SectionTitle>
                        <SectionText dangerouslySetInnerHTML={{ __html: content.aboutSection.text }} />
                    </Left>
                    <Right>
                        <ImageContainer>
                            <Img
                                src={content.aboutSection.img.src}
                                alt={content.aboutSection.img.alt}
                                fill
                            />
                        </ImageContainer>
                    </Right>
                </Inner>
            }
        </Section>
    )
}

export default About