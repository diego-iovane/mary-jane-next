import React from 'react'

const SwiperButtons = ({ swiperRef, swiperRefSec }) => {

    const swipe = () => {
        swiperRef.current.swiper.slidePrev(800, false)
        swiperRefSec.current.swiper.slidePrev(800, false)
        console.log('hola')
    }

    return (
        <div onClick={swipe}>
            <button
                type="button"
                style={{cursor: "pointer"}}
                onClick={swipe}
            >
                CHANGE
            </button>
        </div>
    )
}

export default SwiperButtons