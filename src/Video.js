import ReactPlayer from "react-player";

export const Video = () => {
  return (
    <ReactPlayer
      url="https://www.youtube.com/watch?v=2xUKzeflvR0"
      loop
      playing
      controls
      volume={0.5}
    />
  );
};
