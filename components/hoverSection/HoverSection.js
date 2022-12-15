import React from 'react'
import { GetContentContext } from '../../context/ContentContext'
import {
    Section,
    Inner,
    ImgContainer,
    Img,
    Gallery,
    Overlay,
    Content,
    Title,
    Text,
    SectionTitle,
    SectionText,
    SubTitle,
    Tap,
} from './Elements'

const HoverSection = () => {

    const { content } = GetContentContext()

    return (
        <Section>
            <Inner>
                {
                    Object.entries(content).length !== 0 &&
                    <>
                        <SectionTitle>{content.hoverGallery.title}</SectionTitle>
                        <SectionText>{content.hoverGallery.text}</SectionText>
                        <Gallery>
                            {
                                content.hoverGallery.items.map(item => {
                                    return (
                                        <ImgContainer key={item.src}>
                                            <Img
                                                src={item.src}
                                                alt="festival exhibitions image"
                                                fill
                                            />
                                            <Overlay />
                                            <Content className="child">
                                                <Title>{item.title}</Title>
                                                <Text>{item.text}</Text>
                                            </Content>
                                            <SubTitle className="sub">{item.title}</SubTitle>
                                            {/* <Tap className="tap">-Tap-</Tap> */}
                                        </ImgContainer>
                                    )
                                })
                            }
                        </Gallery>
                    </>
                }
            </Inner>
        </Section>
    )
}

export default HoverSection