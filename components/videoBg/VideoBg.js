import { useScroll, useTransform } from 'framer-motion'
import {
    VideoBg,
    Overlay,
} from './Elements'

const VideoBack = () => {

    const { scrollY } = useScroll()
    const [ grPosition, setGrPosition ] = useState({
        
    })

    console.log(scrollY)

    if(scrollY > 1000 )

    return (
        <>
        {/* autoPlay */}
            <VideoBg loop muted playsInline>
                <source src='/video/bg-video.mp4' type='video/mp4' />
            </VideoBg>
            <Overlay />
        </>
    )
}

export default VideoBack