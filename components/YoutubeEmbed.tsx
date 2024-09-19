interface YoutubeEmbedProps {
  videoId: string,
}

const YoutubeEmbed: React.FC<YoutubeEmbedProps> = ({
  videoId,
}) => {
  return (
    <div
      className="sm:mx-[1.2rem] mt-[6.4rem] mb-[8.9rem] md:pt-[6.4rem] md:pb-[8.4rem] md:px-[6.2rem] h-[62vw] xl:h-[52vw] xl:px-[10vw] "
    >
      <iframe 
        className="w-[100%] h-[100%] rounded-[0.8rem] sm:rounded-[3.3] lg:rounded-[4.2rem]"
        src={`https://www.youtube-nocookie.com/embed/${videoId}`} 
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin" 
        allowFullScreen
        style={{ border: 'none' }} // Remove default border
      />
    </div>
  )
}
export default YoutubeEmbed