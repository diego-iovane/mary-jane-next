import React from 'react'
import { GetContentContext } from '../../../context/ContentContext'
import SmallCta from '../../buttons/SmallCta'
import {
    Section,
    Inner,
    Head,
    ButtonContainer,
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
                    <Head>
                        <SectionTitle>Sponsors 2023</SectionTitle>
                        <ButtonContainer>
                            <SmallCta>Become a sponsor</SmallCta>
                        </ButtonContainer>
                    </Head>
                    <LogosContainer>
                        {
                            content.sponsorsSection.sponsors.map(item => {
                                return (
                                    <LogoContainer key={item.src}>
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