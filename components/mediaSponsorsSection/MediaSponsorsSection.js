import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/grid"
import "swiper/css/pagination"
import { Grid, Pagination } from "swiper";
import { GetContentContext } from '../../context/ContentContext'
import {
    Section,
    Inner,
    SectionTitle,
    LogoContainer,
    Logo,
} from './Elements'

const MediaSponsorsSection = () => {

    const { content } = GetContentContext()

    // console.log(content)

    return (
        <Section>
            {
                Object.entries(content).length !== 0 &&
                <Inner>
                    <SectionTitle>{content.mediaSponsorsSection.title}</SectionTitle>
                    <Swiper
                            slidesPerView={3}
                            breakpoints={{
                                900: {
                                    slidesPerView: 7,
                                },
                                650: {
                                    slidesPerView: 5,
                                },
                                400: {
                                    slidesPerView: 3,
                                },
                            }}
                            grid={{
                                rows: 1,
                            }}
                            spaceBetween={30}
                            autoplay={true}
                            loop={true}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Grid, Pagination]}
                            className="reviewSwyper"
                        >
                            {
                                content.mediaSponsorsSection.sponsors.map(item => {
                                    return (
                                        <SwiperSlide key={item.src}>
                                            <LogoContainer>
                                                <Logo
                                                    src={item.src}
                                                    alt=""
                                                    fill
                                                />
                                            </LogoContainer>
                                        </SwiperSlide>
                                    )
                                })
                            }
                        </Swiper>
                </Inner>
            }
        </Section>
    )
}

export default MediaSponsorsSection