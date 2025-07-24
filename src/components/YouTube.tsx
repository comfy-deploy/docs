interface YouTubeProps {
  id: string;
  title?: string;
}

export default function YouTube({ id, title = "YouTube video" }: YouTubeProps) {
  return (
    <div className="my-3">
      <div className="relative w-full h-0 pb-[56.25%] rounded-lg overflow-hidden shadow-lg">
        <iframe
          src={`https://www.youtube.com/embed/${id}`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full"
        />
      </div>
    </div>
  );
} 