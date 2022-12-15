import React from 'react'
import { GetContentContext } from '../../context/ContentContext'
import {
    Section,
    Inner,
    SectionTitle,
    LogosContainer,
    LogoContainer,
    Logo
} from './Elements'

const SponsorsSection = () => {

    const { content } = GetContentContext()

    return (
        <Section>
            {
                Object.entries(content).length !== 0 &&
                <Inner>
                    <SectionTitle>{content.sponsorsSection.title}</SectionTitle>
                    <LogosContainer>
                        {
                            content.sponsorsSection.sponsors.map(item => {
                                return (
                                    <LogoContainer>
                                        <Logo
                                            src={item.src}
                                            alt=""
                                            fill
                                        />
                                    </LogoContainer>
                                )
                            })
                        }
                    </LogosContainer>
                </Inner>
            }
        </Section>
    )
}

export default SponsorsSection