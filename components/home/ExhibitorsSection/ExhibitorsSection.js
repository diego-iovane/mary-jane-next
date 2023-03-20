import { useEffect, useState } from 'react'
import Link from 'next/link'
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

const ExhibitorsSection = ({ data, content, language }) => {

    const [exhibitors, setExhibitors] = useState([])
    const text = language === 'en' ?
        {
            title: content.exhibitorsTitleEn || '',
            ctaOne: content.exhibitorsCtaOneEn || '',
            ctaTwo: content.exhibitorsCtaTwoEn || '',
        } :
        {
            title: content.exhibitorsTitleDe || '',
            ctaOne: content.exhibitorsCtaOneDe || '',
            ctaTwo: content.exhibitorsCtaTwoDe || '',
        }

    useEffect(() => {
        setExhibitors(data)
    }, [])

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
                        <SectionTitle>{text.title}</SectionTitle>
                        <ButtonsContainer>
                            <ButtonContainer>
                                <Link href="/">
                                    <SmallCta>{text.ctaOne}</SmallCta>
                                </Link>
                            </ButtonContainer>
                            <ButtonContainer>
                                <Link href="/exhibitors">
                                    <SmallCtaAlt>{text.ctaTwo}</SmallCtaAlt>
                                </Link>
                            </ButtonContainer>
                        </ButtonsContainer>
                    </Head>
                </Inner>
                {
                    exhibitors.length !== 0 ?
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
                                exhibitors.map(item => {
                                    return (
                                        <SwiperSlide key={item.node.logo.sourceUrl}>
                                            <LogoContainer>
                                                <Logo
                                                    src={item.node.logo.sourceUrl}
                                                    alt={item.node.logo.altText}
                                                    fill
                                                />
                                            </LogoContainer>
                                        </SwiperSlide>
                                    )
                                })
                            }
                        </Swiper> : null
                }
            </>
        </Section>
    )
}

export default ExhibitorsSection