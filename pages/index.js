import Head from 'next/head'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { GetLanguageContext } from '../context/LanguageContext'
import Hero from '../components/home/Hero/Hero'
import ExhibitorsSection from '../components/exhibitorsSection/ExhibitorsSection'
import ReviewSection from '../components/reviewsSection/ReviewSection'
import CtaSection from '../components/ctaSection/CtaSection'
import ImageGallery from '../components/imageGallery/ImageGallery'
import MediaSponsorsSection from '../components/mediaSponsorsSection/MediaSponsorsSection'
import SponsorsSection from '../components/sponsorsSection/SponsorsSection'
import TicketsSection from '../components/ticketsSection/TicketsSection'
import FloatingButton from '../components/floatingButton/FloatingButton'
import Exhibition from '../components/home/Exhibition/Exhibition'
import ForExhibitors from '../components/home/ForExhibitors/ForExhibitors'
import MediaReviews from '../components/home/MediaReviews/MediaReviews'

export default function Home() {

  const { locale } = useRouter()
  const { language, setLanguage } = GetLanguageContext()

  useEffect(() => {

    setLanguage({
      ...language,
      locale: locale
    })
  }, [locale])

  return (
    <div>
      <Head>
        <title>Mary Jane Berlin - Cannabis Expo Germany | Festival | Conference</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Exhibition />
      <ForExhibitors />
      <MediaReviews />
      <ExhibitorsSection />
      <SponsorsSection />
      <MediaSponsorsSection />
      {/* <CtaSection /> */}
      <ReviewSection />
      <ImageGallery />
      {/* <TicketsSection /> */}
      <FloatingButton />
      {/* <p><span style="color: #000000;"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2429.017265678043!2d13.45178785148433!3d52.49692704559199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e55b04a4c0b%3A0x6852fd9350063186!2sArena+Berlin!5e0!3m2!1sde!2sde!4v1506645423255" width="520" height="400" frameBorder="0" allowFullScreen="allowfullscreen"></iframe></span></p> */}
    </div>
  )
}