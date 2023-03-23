import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css"
import "swiper/css/effect-fade"
import "swiper/css/navigation"
import "swiper/css/pagination"
import SwiperButtons from './SwiperButtons/SwiperButtons'
import Card from './Card'
import {
    Inner,
    Title,
    SwiperContainer,
} from './Elements'

const Journey = ({ content, title }) => {

    const swiperRef = useRef()

    const cards = Object.keys(content).map(key => {
        return { ...content[key] }
    })

    console.log(cards, title)

    return (
        <Inner>
            <Title>Follow our Journey</Title>
            <SwiperContainer>
                <Swiper
                    ref={swiperRef}
                    className="journeySwiper"
                >
                    {
                        cards.map(card => {
                            return (
                                <SwiperSlide key={card.image.sourceUrl}>
                                    <Card content={card} />
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
                <SwiperButtons swiperRef={swiperRef} />
            </SwiperContainer>
        </Inner>
    )
}

export default Journey