import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/grid"
import "swiper/css/pagination"
import { Grid, Pagination, Autoplay } from "swiper"
import { GetContentContext } from '../../../context/ContentContext'
import SmallCta from '../../buttons/SmallCta'
import SmallCtaAlt from '../../buttons/SmallCtaAlt'
import {
    Section,
    Inner,
    Head,
    ButtonContainer,
    SectionTitle,
    LogoContainer,
    Logo,
} from './Elements'

const ExhibitorsSection = () => {

    const { content } = GetContentContext()
    const swiperRef = useRef()

    return (
        <Section>
            {
                Object.entries(content).length !== 0 &&
                <Inner>
                    <Head>
                        <SectionTitle>{content.exhibitorsGallery.title}</SectionTitle>
                        <ButtonContainer>
                            <SmallCta>Become an exhibitor</SmallCta>
                        </ButtonContainer>
                        <ButtonContainer>
                            <SmallCtaAlt>View all exhibitors</SmallCtaAlt>
                        </ButtonContainer>
                    </Head>
                    <Swiper
                        ref={swiperRef}
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
                        autoplay={{
                            delay: 900,
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
                </Inner>
            }
        </Section>
    )
}

export default ExhibitorsSection