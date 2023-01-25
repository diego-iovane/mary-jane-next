import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/grid"
import "swiper/css/pagination"
import { Grid, Pagination } from "swiper";
import { GetContentContext } from '../../context/ContentContext'
import Review from './Review'
import {
    Section,
    Inner,
    SectionTitle,
    ButtonsContainer,
} from './Elements'
import SwiperButtons from '../swiperButtons/SwiperButtons'

const MediaReviews = () => {

    const { content } = GetContentContext()
    const swiperRef = useRef()

    return (
        <Section>
            {
                Object.entries(content).length !== 0 &&
                <Inner>
                    <SectionTitle>{content.features.title}</SectionTitle>
                    <Swiper
                        ref={swiperRef}
                        className="mediaReviewSwyper"
                        slidesPerView={1}
                        breakpoints={{
                            900: {
                                slidesPerView: 3,
                            },
                            650: {
                                slidesPerView: 2,
                            },
                            400: {
                                slidesPerView: 1,
                            },
                        }}
                        grid={{
                            rows: 1,
                        }}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Grid, Pagination]}
                        // onSlideChange={() => console.log('change')}
                    >
                        {
                            content.features.mediaLogos.map((item, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <Review content={item} />
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                    <ButtonsContainer>
                        <SwiperButtons swiperRef={swiperRef} />
                    </ButtonsContainer>
                </Inner>
            }
        </Section>
    )
}

export default MediaReviews