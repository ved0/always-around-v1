import { useState } from "react";
import AudioTimer from "./AudioTimer";

const VideoController = (props) => {
  const [value, setValue] = useState(100);
  const [secondValue, setSecondValue] = useState(100);
  const [clicked, setClicked] = useState(false);
  let videoElements = props.videoElements.current;
  let index = props.indexOfCurrentPlayingVideo;

  const stopTheController = (event) => {
    const sliderValue = event.target.value;
    if (event.target.className == "slider") {
      setValue(sliderValue);
      if (secondValue > 7) {
        setSecondValue(100);
      }
    } else {
      setSecondValue(sliderValue);
      if (value > 7) {
        setValue(100);
      }
    }
    if (value <= 15 && secondValue <= 15) {
      document.exitFullscreen();
      videoElements[index].pause();
      videoElements[index].className = "";
      videoElements[index].currentTime = 0;
      clearTimeout(props.timeOut);
      props.setDisplayController(false);
    }
  };

  const iAmClicked = () => {
    if (
      videoElements[index].currentTime >=
      videoElements[index].duration * 0.5
    ) {
      setClicked(true);
      videoElements[index].className = "";
      videoElements[index].pause();
      videoElements[index].currentTime = 0;
      if (index + 1 == props.videoElements.current.length) {
        videoElements[0].className = "active";
        videoElements[0].play();
      } else {
        videoElements[index + 1].className = "active";
        videoElements[index + 1].play();
      }
    }
  };

  return (
    <div className="video-controller" onClick={iAmClicked}>
      <div className="stop-slider">
        <label htmlFor="stop">
          Dra båda "pilarna" hela vägen för att avsluta!
        </label>
        <input
          type="range"
          min="1"
          max="100"
          value={value}
          id="stop"
          className="slider"
          onChange={stopTheController}
        ></input>
      </div>
      <AudioTimer
        videoElements={videoElements}
        paused={props.paused}
        index={index}
        setPaused={props.setPaused}
        clicked={clicked}
        setClicked={setClicked}
      />
      <div className="stop-slider-two">
        <input
          type="range"
          min="1"
          max="100"
          value={secondValue}
          className="slider-two"
          onChange={stopTheController}
        ></input>
      </div>
    </div>
  );
};

export default VideoController;
