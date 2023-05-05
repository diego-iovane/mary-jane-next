import {
    VideoBg,
    Overlay,
} from './Elements'

const VideoBack = () => {

    return (
        <>
            <VideoBg autoPlay loop muted playsInline poster='/video/poster.webp'>
                <source src='/video/bg-video.mp4' type='video/mp4' />
            </VideoBg>
            <Overlay />
        </>
    )
}

export default VideoBack