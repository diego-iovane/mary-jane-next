import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/grid"
import "swiper/css/pagination"
// import required modules
import { Grid, Pagination } from "swiper";
import { GetContentContext } from '../../context/ContentContext'
import {
    Section,
    Gallery,
    Inner,
    ImgContainer,
    Img,
} from './Elements'

const ImageGallery = () => {

    const { content } = GetContentContext()

    return (
        <Section>
            {/* <Gallery>
                <Swiper
                    slidesPerView={3}
                    grid={{
                        rows: 2
                    }}
                    spaceBetween={30}
                    pagination={{
                        clickable: true
                    }}
                    modules={[Grid, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    <SwiperSlide>Slide 5</SwiperSlide>
                    <SwiperSlide>Slide 6</SwiperSlide>
                    <SwiperSlide>Slide 7</SwiperSlide>
                    <SwiperSlide>Slide 8</SwiperSlide>
                    <SwiperSlide>Slide 9</SwiperSlide>
                </Swiper>
            </Gallery> */}
            {
                Object.entries(content).length !== 0 &&
                <Inner>
                    <Swiper
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
                            className="imageGallerySwyper"
                        >
                            {
                                content.imageGallery.img.map((item) => {
                                    return (
                                        <SwiperSlide key={item.src}>
                                            <ImgContainer>
                                                <Img src={item.src} alt={item.alt} fill/>
                                            </ImgContainer>
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