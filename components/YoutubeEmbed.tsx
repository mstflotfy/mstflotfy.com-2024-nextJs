interface YoutubeEmbedProps {
  videoId: string,
}

const YoutubeEmbed: React.FC<YoutubeEmbedProps> = ({
  videoId,
}) => {
  return (
    <div
      className="pt-[6.4rem] pb-[8.4rem] px-[6.2rem] h-[62vw]"
    >
      <iframe 
        className="w-[100%] h-[100%] rounded-[4.6rem]"
        src={`https://www.youtube-nocookie.com/embed/${videoId}`} 
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin" 
        allowFullScreen
        loading="lazy"
        style={{ border: 'none' }} // Remove default border
      />
    </div>
  )
}
export default YoutubeEmbed