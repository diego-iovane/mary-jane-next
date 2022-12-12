import React from 'react'
import { GetContentContext } from '../../../context/ContentContext'
import {
    Section,
    Inner,
    BgImg,
    Content,
    Title,
} from './Elements'

const Newsletter = () => {

    const { content } = GetContentContext()

    return (
        <Section>
            {
                Object.entries(content).length !== 0 &&
                <Inner>
                    <BgImg 
                        src={content.newsletterSection.bgImg.src}
                        alt={content.newsletterSection.bgImg.alt}    
                        fill
                    />
                    <Content>
                        <Title dangerouslySetInnerHTML={{ __html: content.newsletterSection.title }}/>
                    </Content>
                </Inner>
            }
        </Section>
    )
}

export default Newsletter