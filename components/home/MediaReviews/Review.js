import { useSwiperSlide } from 'swiper/react'
import {
  ReviewContainer,
  LogoContainer,
  Logo,
} from './Elements'

const Review = ({ content }) => {

  const thisSlide = useSwiperSlide()

  return (
    <ReviewContainer href={content.url} active={thisSlide.isNext}>
        <LogoContainer>
          <Logo src={content.logo.sourceUrl} alt="" fill />
        </LogoContainer>
    </ReviewContainer>
  )
}

export default Review