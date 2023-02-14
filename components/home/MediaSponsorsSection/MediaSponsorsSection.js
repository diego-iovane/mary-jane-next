import React, { useRef } from 'react'
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
    LogoContainer,
    Logo,
} from './Elements'
import SmallCta from '../../buttons/SmallCta'

const MediaSponsorsSection = () => {

    const { content } = GetContentContext()
    const swiperRef = useRef()

    return (
        <Section>
            {
                Object.entries(content).length !== 0 &&
                <Inner>
                    <Head>
                        <SectionTitle>{content.mediaSponsorsSection.title}</SectionTitle>
                        <ButtonContainer>
                            <SmallCta>Become a Media Sponsor</SmallCta>
                        </ButtonContainer>
                    </Head>
                    <Swiper
                        ref={swiperRef}
                        slidesPerView={3}
                        breakpoints={{
                            900: {
                                slidesPerView: 5,
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
                        className="reviewSwyper"
                    >
                        {
                            content.mediaSponsorsSection.sponsors.map(item => {
                                return (
                                    <SwiperSlide key={item.src}>
                                        <LogoContainer>
                                            <Logo
                                                src={item.src}
                                                alt="media sponsors logo"
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

export default MediaSponsorsSection