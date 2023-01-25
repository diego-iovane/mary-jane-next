import React, { useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/grid"
import "swiper/css/pagination"
import { Grid, Pagination, Autoplay } from "swiper";
import { GetContentContext } from '../../context/ContentContext'
// import SwiperButtons from './SwiperButtons'
import SwiperButtons from '../swiperButtons/SwiperButtons'
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
                        autoplay={{
                            delay: 1500,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        pagination={{
                            clickable: false,
                        }}
                        modules={[Grid, Pagination, Autoplay]}
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
                    <SwiperButtons swiperRef={swiperRef} />
                </Inner>
            }
        </Section>
    )
}

export default ExhibitorsSection