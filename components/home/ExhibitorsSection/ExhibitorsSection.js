import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/grid"
import "swiper/css/pagination"
import { Grid } from "swiper"
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

    const { content } = GetContentContext()

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
            {
                Object.entries(content).length !== 0 &&
                <>
                    <Inner>
                        <Head>
                            <SectionTitle>Exhibitors 2023</SectionTitle>
                            <ButtonContainer>
                                <SmallCta>Become an exhibitor</SmallCta>
                            </ButtonContainer>
                            <ButtonContainer>
                                <SmallCtaAlt>View all exhibitors</SmallCtaAlt>
                            </ButtonContainer>
                        </Head>
                    </Inner>
                    <Swiper
                        slidesPerView={3}
                        breakpoints={{
                            1600: {
                                slidesPerView: 10,
                            },
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
            }
        </Section>
    )
}

export default ExhibitorsSection