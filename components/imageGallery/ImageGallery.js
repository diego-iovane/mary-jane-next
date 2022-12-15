import React, { useEffect, useRef, useState } from 'react'
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
    SectionTitle,
    HoverableArea,
} from './Elements'
import SwiperButtons from '../swiperButtons/SwiperButtons'

const ImageGallery = () => {

    const { content } = GetContentContext()
    const swiperRef = useRef()
    const [isHovering, setIsHovering] = useState(false)
    let loop

    useEffect(() => {

        if (isHovering) {
            console.log('clear Interval')
            return clearInterval(loop)
        } else {

            console.log('create Interval')
            loop = setInterval(() => {
                if (swiperRef.current !== undefined) {
                    swiperRef.current.swiper.slideNext(2700, false)
                }
            }, 2900)
        }

        return () => clearInterval(loop)
    }, [isHovering, swiperRef.current])

    return (
        <Section>
            {
                Object.entries(content).length !== 0 &&
                <Inner>
                    <SectionTitle>{content.imageGallery.title}</SectionTitle>
                    <HoverableArea
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                    >
                        <Swiper
                            ref={swiperRef}
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
                            loop={true}
                            modules={[Grid, Pagination]}
                            className="imageGallerySwyper"
                        >
                            {
                                content.imageGallery.img.map((item) => {
                                    return (
                                        <SwiperSlide key={item.src}>
                                            <Frame >
                                                <AnchorOverlay
                                                    href={item.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                />
                                                <ImgContainer>
                                                    <Img src={item.src} alt={item.alt} fill />
                                                </ImgContainer>
                                            </Frame>
                                        </SwiperSlide>
                                    )
                                })
                            }
                        </Swiper>
                    </HoverableArea>
                    <SwiperButtons swiperRef={swiperRef} />
                </Inner>
            }
        </Section>
    )
}

export default ImageGallery