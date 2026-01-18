type YouTubeEmbedProps = {
  videoId: string;
  title?: string;
};

const YouTubeEmbed = ({ videoId, title }: YouTubeEmbedProps) => {
  return (
    <div className="w-full aspect-video mb-8">
      <iframe
        className="w-full h-full rounded-xl"
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title ?? "YouTube video"}
        loading="lazy"
        allowFullScreen
      />
    </div>
  );
};

export default YouTubeEmbed;
