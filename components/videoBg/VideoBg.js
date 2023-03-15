import {
    VideoBg,
    Overlay,
} from './Elements'

const VideoBack = () => {

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