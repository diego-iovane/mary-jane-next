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
    SectionTitle,
    LogoContainer,
    Logo,
    ButtonsContainer,
    ButtonContainer,
    AltButtonContainer,
} from './Elements'

const ExhibitorsSection = ({ data, content, language }) => {

    const [exhibitors, setExhibitors] = useState([])
    console.log(content)
    const text = language === 'en' ?
        {
            title: content.exhibitorsTitleEn || '',
            ctaOne: content.exhibitorsCtaOneEn || '',
            ctaTwo: content.exhibitorsCtaTwoEn || '',
            ctaTwoMobile: content.exhibitorsCtaTwoMobileEn || '',
        } :
        {
            title: content.exhibitorsTitleDe || '',
            ctaOne: content.exhibitorsCtaOneDe || '',
            ctaTwo: content.exhibitorsCtaTwoDe || '',
            ctaTwoMobile: content.exhibitorsCtaTwoMobileDe || '',
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

    console.log(text.ctaTwo)

    return (
        <Section>
            <>
                <Inner>
                    <Head>
                        <SectionTitle>{text.title}</SectionTitle>
                        <ButtonsContainer>
                            <ButtonContainer>
                                <Link href={text.ctaOne.url}>
                                    <SmallCta>{text.ctaOne.text}</SmallCta>
                                </Link>
                            </ButtonContainer>
                            <ButtonContainer>
                                <Link href={text.ctaTwo.url}>
                                    <SmallCtaAlt>{text.ctaTwo.text}</SmallCtaAlt>
                                </Link>
                            </ButtonContainer>
                            <AltButtonContainer>
                                <Link href={text.ctaTwoMobile.url}>
                                    <SmallCtaAlt>{text.ctaTwoMobile.text}</SmallCtaAlt>
                                </Link>
                            </AltButtonContainer>
                        </ButtonsContainer>
                    </Head>
                </Inner>
                {
                    exhibitors.length !== 0 ?
                        <Swiper
                            slidesPerView={2}
                            breakpoints={{
                                1600: {
                                    slidesPerView: 10,
                                },
                                1300: {
                                    slidesPerView: 9,
                                },
                                1100: {
                                    slidesPerView: 7,
                                },
                                780: {
                                    slidesPerView: 5,
                                },
                                550: {
                                    slidesPerView: 4,
                                },
                                500: {
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