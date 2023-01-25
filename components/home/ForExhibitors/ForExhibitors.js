import Features from '../../features/Features'
import {
    Section,
    Inner,
    FeaturesContainer,
    Content,
    Title,
    Text,
} from './Elements'

const ForExhibitors = () => {
    return (
        <Section>
            <Inner>
                <FeaturesContainer>
                    <Features />
                </FeaturesContainer>
                <Content>
                    <Title>Grow your business</Title>
                    <Text>
                        <p>Mary Jane Berlin is Europe’s fastest growing Cannabis expo with over 300 international exhibitors, 30,000 visitors and 35,000 products.
                        </p>
                        <p>
                        Don’t miss your unique market entry and exhibit at Mary Jane Berlin! We support you in the growth of your business.
                        </p>
                        <p>
                        At Mary Jane Berlin you have the opportunity to present your product to customers, all major merchants & producers from all over the world.
                        </p>
                        </Text>
                </Content>
            </Inner>
        </Section>
    )
}

export default ForExhibitors