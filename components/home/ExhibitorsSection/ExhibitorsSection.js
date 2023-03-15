import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/grid"
import "swiper/css/pagination"
import { Grid } from "swiper"
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
    ButtonsContainer,
} from './Elements'

const ExhibitorsSection = () => {

    const temp = [
        { src: '/temp/1.png' },
        { src: '/temp/2.png' },
        { src: '/temp/3.webp' },
        { src: '/temp/4.webp' },
        { src: '/temp/5.webp' },
        { src: '/temp/6.png' },
        { src: '/temp/7.webp' },
        { src: '/temp/8.png' },
        { src: '/temp/9.webp' },
        { src: '/temp/10.png' },
    ]

    const handleSwiper = (swiper) => {

        const infinite = () => {
            swiper.slideTo(swiper.slides.length, 30000)
            swiper.once('transitionEnd', function () {
                swiper.slideTo(swiper.params.slidesPerView, 0, false);
                setTimeout(function () {
                    infinite();
                }, 0);
            });
        }

        infinite()
    }

    return (
        <Section>
                <>
                    <Inner>
                        <Head>
                            <SectionTitle>Exhibitors 2023</SectionTitle>
                            <ButtonsContainer>
                                <ButtonContainer>
                                    <SmallCta>Become an exhibitor</SmallCta>
                                </ButtonContainer>
                                <ButtonContainer>
                                    <SmallCtaAlt>View all exhibitors</SmallCtaAlt>
                                </ButtonContainer>
                            </ButtonsContainer>
                        </Head>
                    </Inner>
                    <Swiper
                        slidesPerView={1}
                        breakpoints={{
                            1600: {
                                slidesPerView: 10,
                            },
                            1300: {
                                slidesPerView: 9,
                            },
                            1100: {
                                slidesPerView: 8,
                            },
                            700: {
                                slidesPerView: 5,
                            },
                            400: {
                                slidesPerView: 2,
                            },
                        }}
                        grid={{
                            rows: 1,
                        }}
                        spaceBetween={30}
                        loop={true}
                        freeMode={true}
                        allowTouchMove={false}
                        modules={[Grid]}
                        onSwiper={handleSwiper}
                        className="exhibitorsSwiper"
                    >
                        {
                            temp.map(item => {
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
                </>
        </Section>
    )
}

export default ExhibitorsSection