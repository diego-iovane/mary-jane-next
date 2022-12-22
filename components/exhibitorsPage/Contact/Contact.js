import React from 'react'
import { GetContentContext } from '../../../context/ContentContext'
import {
    Section,
    Inner,
} from '../Elements'
import { 
    Container,
    Text,
    IconContainer,
    Icon,
    BgIcon,
} from './Elements'

const Contact = () => {

    const { content } = GetContentContext()

    return (
        <Section>
            <Inner>
                <Container>
                    {/* <Text dangerouslySetInnerHTML={{ __html: {content.bookingInfo.contact.title} }} />
                    <Text dangerouslySetInnerHTML={{ __html: {content.bookingInfo.contact.contact} }} /> */}
                    <BgIcon>
                        <IconContainer>
                            <Icon
                                src={content.bookingInfo.contact.icon}
                                fill
                            />
                        </IconContainer>
                    </BgIcon>
                </Container>
            </Inner>
        </Section>
    )
}

export default Contact