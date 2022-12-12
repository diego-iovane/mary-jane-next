import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/grid"
import "swiper/css/pagination"
// import required modules
import { Grid, Pagination } from "swiper";
import { GetContentContext } from '../../context/ContentContext'
import Review from './Review'
import {
    Section,
    Inner,
    Star,
    HalfStar,
    RevWidget,
    GContainer,
    GImg,
    StarsContainer,
    SectionTitle,
    ReviewsContainer,
} from './Elements'

const ReviewSection = () => {

    const { content } = GetContentContext()

    console.log(content)

    return (
        <Section>
            {
                Object.entries(content).length !== 0 &&
                <Inner>
                    <SectionTitle>{content.reviewsSection.title}</SectionTitle>
                    <RevWidget>
                        <GContainer>
                            <GImg
                                src={content.reviewsSection.gLogo.src}
                                alt={content.reviewsSection.gLogo.alt}
                                fill
                            />
                        </GContainer>
                        <StarsContainer>
                            <Star />
                            <Star />
                            <Star />
                            <Star />
                            <HalfStar />
                        </StarsContainer>
                    </RevWidget>
                    {/* <ReviewsContainer> */}
                        <Swiper
                            // slidesPerView={3}
                            breakpoints={{
                                1500: {
                                    slidesPerView: 3,
                                },
                                650: {
                                    slidesPerView: 2,
                                },
                                400: {
                                    slidesPerView: 1,
                                }
                            }}
                            grid={{
                                rows: 2,
                            }}
                            spaceBetween={30}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Grid, Pagination]}
                            className="mySwiper"
                        >
                            {
                                content.reviewsSection.reviews.map((item, index) => {
                                    return (
                                        <SwiperSlide key={index}>
                                            <Review content={item} />
                                        </SwiperSlide>
                                    )
                                })
                            }
                        </Swiper>
                    {/* </ReviewsContainer> */}
                </Inner>
            }
        </Section>
    )
}

export default ReviewSection