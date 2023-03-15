import { useRef } from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperButtons from '../swiperButtons/SwiperButtons'
import "swiper/css"
import "swiper/css/pagination"
import { Pagination } from "swiper"
import {
    Section,
    Inner,
    ButtonsContainer,
} from './Elements'
import AccomodationCard from './AccomodationCard'

const AccomodationPage = () => {

    const temp = [
        {
            img: '/temp/hotel.png',
            title: 'Hotel',
        },
        {
            img: '/temp/hotel.png',
            title: 'Hotel',
        },
        {
            img: '/temp/hotel.png',
            title: 'Hotel',
        },
        {
            img: '/temp/hotel.png',
            title: 'Hotel',
        },
        {
            img: '/temp/hotel.png',
            title: 'Hotel',
        },
        {
            img: '/temp/hotel.png',
            title: 'Hotel',
        },
        {
            img: '/temp/hotel.png',
            title: 'Hotel',
        },
    ]

    const swiperRef = useRef()

    return (
        <Section>
            <Inner>
                <Swiper
                    ref={swiperRef}
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
                    spaceBetween={2}
                    pagination={{
                        clickable: true,
                    }}
                    loop={true}
                    modules={[Pagination]}
                    className="accomodationSwyper"
                >
                    {
                        temp.map((item, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <AccomodationCard content={item} />
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
                <ButtonsContainer>
                    <SwiperButtons swiperRef={swiperRef} />
                </ButtonsContainer>
            </Inner>
        </Section>
    )
}

export default AccomodationPage