import React from 'react'
import { GetContentContext } from '../../context/ContentContext'
import {
    Section,
    Inner,
    Content,
    Title,
    IconsContainer,
    IconContainer,
    Icon,
} from './Elements'

const SocialSection = () => {

    const { content } = GetContentContext()

    return (
        <Section>
            {
                Object.entries(content).length !== 0 &&
                <Inner>
                    <Content>
                        <Title>{content.socialSection.title}</Title>
                        <IconsContainer>
                            {
                                content.socialSection.items.map(item => {
                                    return(
                                        <IconContainer
                                            key={item.src}
                                            href={item.url}
                                        >
                                            <Icon
                                                src={item.src}
                                                alt={item.alt}
                                                fill
                                            />
                                        </IconContainer>
                                    )
                                })
                            }
                        </IconsContainer>
                    </Content>
                </Inner>
            }
        </Section>
    )
}

export default SocialSection