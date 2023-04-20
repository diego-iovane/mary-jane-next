import {
    VideoBg,
    Overlay,
} from './Elements'

const VideoBack = () => {

    return (
        <>
        {/* autoPlay */}
            <VideoBg autoPlay loop muted playsInline poster='/vide/poster.jpg'>
                <source src='/video/bg-video.mp4' type='video/mp4' />
            </VideoBg>
            <Overlay />
        </>
    )
}

export default VideoBack