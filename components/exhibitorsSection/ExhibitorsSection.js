import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/grid"
import "swiper/css/pagination"
import { Grid, Pagination } from "swiper";
import { GetContentContext } from '../../context/ContentContext'
import SwiperButtons from './SwiperButtons'
import {
    Section,
    Inner,
    SectionTitle,
    LogoContainer,
    Logo
} from './Elements'

const ExhibitorsSection = () => {

    const { content } = GetContentContext()
    const swiperRef = useRef()
    const swiperRefSec = useRef()

    return (
        <Section>
        {
            Object.entries(content).length !== 0 &&
            <Inner>
                <SectionTitle>{content.exhibitorsGallery.title}</SectionTitle>
                <Swiper
                        ref={swiperRef}
                        slidesPerView={1}
                        breakpoints={{
                            900: {
                                slidesPerView: 3,
                            },
                            650: {
                                slidesPerView: 3,
                            },
                            400: {
                                slidesPerView: 1,
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
                        modules={[Grid]}
                        className="exhibitorsSwyper"
                    >
                        {
                            content.exhibitorsGallery.items.map(item => {
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
                    <Swiper
                        ref={swiperRefSec}
                        slidesPerView={2}
                        breakpoints={{
                            900: {
                                slidesPerView: 3,
                            },
                            650: {
                                slidesPerView: 3,
                            },
                            400: {
                                slidesPerView: 2,
                            },
                        }}
                        grid={{
                            rows: 1,
                        }}
                        spaceBetween={30}
                        autoplay={true}
                        loop={true}
                        pagination={{
                            clickable: false,
                        }}
                        modules={[Grid, Pagination]}
                        className="exhibitorsSwyper"
                    >
                        {
                            content.exhibitorsGalleryAlt.items.map(item => {
                                return (
                                    <SwiperSlide key={item.src}>
                                        <LogoContainer>
                                            <Logo
                                                src={item.src}
                                                alt="exhibitors logo"
                                                fill
                                            />
                                        </LogoContainer>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                    <SwiperButtons 
                        swiperRef={swiperRef}
                        swiperRefSec={swiperRefSec}
                    />
            </Inner>
        }
    </Section>
    )
}

export default ExhibitorsSection