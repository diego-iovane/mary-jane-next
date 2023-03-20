import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css"
import "swiper/css/effect-fade"
import "swiper/css/navigation"
import "swiper/css/pagination"
import {
    Section,
    Inner,
    InnerSection,
    FurnitureLeft,
    FurnitureRight,
    Title,
    Subtitle,
    SmallText,
    DetailsContainer,
    Address,
} from './Elements'

const FurnitureRentalPage = ({ gallery, content }) => {

    console.log(content)

    return (
        <Section>
            <Inner>
                <InnerSection>
                    <FurnitureLeft></FurnitureLeft>
                    <FurnitureRight>
                        <Title>{content.title}</Title>
                        <Subtitle>{content.subtitle}</Subtitle>
                        <SmallText>{content.shortText}</SmallText>
                        <DetailsContainer>
                            {/* <Address dangerouslySetInnerHTML={{ __html: content.address}} /> */}
                        </DetailsContainer>
                    </FurnitureRight>
                </InnerSection>
            </Inner>
        </Section>
    )
}

export default FurnitureRentalPage