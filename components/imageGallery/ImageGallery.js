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
    Frame,
    ImgContainer,
    Img,
    AnchorOverlay,
} from './Elements'

const ImageGallery = () => {

    const { content } = GetContentContext()

    return (
        <Section>
            {
                Object.entries(content).length !== 0 &&
                <Inner>
                    <Swiper
                            slidesPerView={1}
                            breakpoints={{
                                800: {
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
                            className="imageGallerySwyper"
                        >
                            {
                                content.imageGallery.img.map((item) => {
                                    return (
                                        <SwiperSlide key={item.src}>
                                            <Frame href={item.url}>
                                                <AnchorOverlay />
                                                <ImgContainer>
                                                    <Img src={item.src} alt={item.alt} fill/>
                                                </ImgContainer>
                                            </Frame>
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

export default ImageGallery