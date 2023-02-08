import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/grid"
import "swiper/css/pagination"
import { Grid, Pagination } from "swiper";
import { GetContentContext } from '../../../context/ContentContext'
import SwiperButtons from '../../swiperButtons/SwiperButtons'
import {
    Section,
    Inner,
    SectionTitle,
    Head,
    ButtonContainer,
    SwiperInner,
    LogoContainer,
    Logo,
    NameContainer,
    Name,
    Surname,
} from './Elements'
import SmallCta from '../../buttons/SmallCta'

const Speakers = () => {

    const temp = [
        {
            src: '/temp/andre.webp',
            name: 'Andreas',
            surname: 'Muller',
        },
        {
            src: '/temp/greg.jpg',
            name: 'Gregor',
            surname: 'Cichy',
        },
        {
            src: '/temp/vane.jpg',
            name: 'Vanessa',
            surname: 'Wennninger',
        },
        {
            src: '/temp/mir.jpg',
            name: 'Mirta',
            surname: 'Rostas',
        },
    ]

    const { content } = GetContentContext()
    const swiperRef = useRef()
    const [isInView, setInView] = useState(false)
    

    return (
        <Section whileInView={() => setInView(true)}>
            {
                Object.entries(content).length !== 0 &&
                <Inner isinview={isInView}>
                    <Head>
                        <SectionTitle>Speakers</SectionTitle>
                        <ButtonContainer>
                            <SmallCta>Check the full agenda</SmallCta>
                        </ButtonContainer>
                    </Head>
                    <Swiper
                        ref={swiperRef}
                        slidesPerView={3}
                        breakpoints={{
                            900: {
                                slidesPerView: 4,
                            },
                            650: {
                                slidesPerView: 4,
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
                        className="speakersSwyper"
                    >
                        {
                            temp.map(item => {
                                return (
                                    <SwiperSlide key={item.surname}>
                                        <SwiperInner>
                                            <LogoContainer>
                                                <Logo
                                                    src={item.src}
                                                    alt="speaker"
                                                    fill
                                                />
                                            </LogoContainer>
                                            <NameContainer isinview={isInView}>
                                                <Name>{item.name}</Name>
                                                <Surname>{item.surname}</Surname>
                                            </NameContainer>
                                        </SwiperInner>
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

export default Speakers