import React from 'react'
import Newsletter from './newsletter/NewsLetter'
import styled from 'styled-components'
import { GetContentContext } from '../../context/ContentContext'
import Visit from './visit/Visit'

const Section = styled.section`
    width: 100%;
    position: relative;
`

const Title = styled.h2`
    font-size: 2.5rem;
    text-align: center;
`

const CtaSection = () => {

    const { content } = GetContentContext()

    return (
        <Section>
            {
                Object.entries(content).length !== 0 &&
                <>
                    <Title>{content.newsletterSection.mainTitle}</Title>
                    <Visit />
                    <Newsletter />
                </>
            }
        </Section>
    )
}

export default CtaSection