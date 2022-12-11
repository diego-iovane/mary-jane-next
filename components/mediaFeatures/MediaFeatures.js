import React from 'react'
import { GetContentContext } from '../../context/ContentContext'
import {
    Section,
    Inner,
    Carousel,
    Title,
    LogoContainer,
    Logo,
} from './Elements'

const MediaFeatures = () => {

    const { content } = GetContentContext()

    console.log(content)

    return (
        <Section>
            {
                Object.entries(content).length !== 0 &&
                <Inner>
                    <Title>{content.features.title}</Title>
                    <Carousel>
                        {
                            content.features.mediaLogos.map(item => {
                                return (
                                    <LogoContainer
                                        href={item.url}
                                        key={item.src}>
                                        <Logo
                                            src={item.src}
                                            alt={item.alt}
                                            fill
                                        />
                                    </LogoContainer>
                                )
                            })
                        }
                    </Carousel>
                </Inner>
            }
        </Section>
    )
}

export default MediaFeatures