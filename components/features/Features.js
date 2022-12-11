import React from 'react'
import { GetContentContext } from '../../context/ContentContext'
import Count from './Count'
import {
    Section,
    Inner,
    Items,
    ItemContainer,
    IconContainer,
    CountContainer,
    Icon,
    Text,
} from './Elements'

const Features = () => {

    const { content } = GetContentContext()

    return (
        <Section>
            <Inner>
                <Items>
                    {
                        Object.entries(content).length !== 0 &&
                        content.features.items.map(item => {
                            return (
                                <ItemContainer key={item.img}>
                                    <IconContainer>
                                        <Icon
                                            src={item.img}
                                            alt="icon"
                                            fill
                                        />
                                    </IconContainer>
                                    <CountContainer>
                                        <Count>
                                            {item.num}
                                        </Count>
                                        <span>+</span>
                                    </CountContainer>
                                    <Text dangerouslySetInnerHTML={{ __html: item.text }} />
                                </ItemContainer>
                            )
                        })
                    }
                </Items>
            </Inner>
        </Section>
    )
}

export default Features