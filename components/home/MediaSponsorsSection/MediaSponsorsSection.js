import React, { useRef, useState, useEffect } from 'react'
import Link from 'next/link'
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/grid"
import "swiper/css/pagination"
import { Grid, Pagination } from "swiper";
import SwiperButtons from '../../swiperButtons/SwiperButtons'
import SmallCta from '../../buttons/SmallCta'
import {
    Section,
    Inner,
    SectionTitle,
    Head,
    ButtonContainer,
    LogoContainer,
    Logo,
    SwiperButtonsContainer,
} from './Elements'

const MediaSponsorsSection = ({ data, content, language }) => {

    const swiperRef = useRef()
    const [sponsors, setSponsors] = useState([])
    const text = language === 'en' ? content.mediaSponsorsContentEn : content.mediaSponsorsContentDe

    useEffect(() => {
        setSponsors(data)
    }, [])

    return (
        <Section>
                <Inner>
                    <Head>
                        <SectionTitle>{text.title}</SectionTitle>
                        <ButtonContainer>
                            <Link href={text.button.url}>
                                <SmallCta>{text.button.text}</SmallCta>
                            </Link>
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
                            sponsors.length !== 0 ?
                            sponsors.map(item => {
                                return (
                                    <SwiperSlide key={item.node.src}>
                                        <a href={item.node.website} target="_blank" rel="noopener noreferrer">
                                            <LogoContainer>
                                                <Logo
                                                    src={item.node.logo.sourceUrl}
                                                    alt={item.node.logo.altText}
                                                    fill
                                                />
                                            </LogoContainer>
                                        </a>
                                    </SwiperSlide>
                                )
                            }) : null
                        }
                    </Swiper>
                    <SwiperButtonsContainer>
                        <SwiperButtons swiperRef={swiperRef} />
                    </SwiperButtonsContainer>
                </Inner>
        </Section>
    )
}

export default MediaSponsorsSection