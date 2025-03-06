import { Card } from "./card";

interface VideoPlayerProps {
  src: string;
}

const VideoPlayer = ({ src }: VideoPlayerProps) => {
  return (
    <Card className="overflow-hidden">
      <video
        className="w-full aspect-video"
        controls
        src={src}
      >
        Your browser does not support the video tag.
      </video>
    </Card>
  );
};

export default VideoPlayer; 