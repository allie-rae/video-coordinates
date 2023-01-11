import ReactPlayer from "react-player";

function App() {
  const width = 500;
  const height = width * (9 / 16);

  return (
    <ReactPlayer
      className="position-absolute"
      url="https://www.youtube.com/watch?v=2xUKzeflvR0"
      loop
      playing
      controls
      volume={0.5}
      width={width}
      height={height}
    />
  );
}

export default App;
