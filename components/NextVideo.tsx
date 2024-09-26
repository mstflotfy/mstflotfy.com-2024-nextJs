import Video from 'next-video';
import Player from 'next-video/player';

interface NextVideoProps {
  src: string
  poster?: string
  width?: string | number
  height?: string | number
  controls?: boolean
  autoPlay?: boolean
  loop?: boolean
  muted?: boolean
  playsInline?: boolean
}
const NextVideo: React.FC<NextVideoProps> = ({
  src,
  poster,
  width,
  height,
  controls = true,
  autoPlay = true,
  loop = true,
  muted = false,
  playsInline = true,
}) => {
return (
  <div
    aria-label='Video showcasing OneExercise feature'
    className='outline outline-8 outline-m3-sys-light-outline rounded-3xl pb-2 bg-black w-[21vw] h-auto overflow-clip'
  >
    <Player
        src={src}
        poster={poster}
        controls={controls}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
      />
  </div>
    )
}
export default NextVideo