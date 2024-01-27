import { useState, useEffect } from "react";

const AudioTimer = (props) => {
  const [audioPlay, setAudioPlay] = useState(false);
  const currentVideo = props.videoElements[props.index];

  const playAudio = () => {
    const duration = props.videoElements[props.index].duration;
    const currentTime = props.videoElements[props.index].currentTime;
    const halfTime = duration * 0.5;
    if (!props.paused && duration>currentTime) {
      props.setClicked(false);
      if (currentTime >= halfTime - 1.15 && currentTime <= halfTime + 1.15) {
        currentVideo.volume = 0.1;
        setAudioPlay(true);
      } else {
        currentVideo.volume = 1;
        setAudioPlay(false);
      }
    } else {
      setAudioPlay(true);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => playAudio(), props.clicked ? 500 : 2300);
    return () => clearInterval(interval);
  }, [props.paused, props.clicked]);

  return (
    <div className="videoTimer">
      {!!audioPlay ? (
        <audio
          autoPlay
          src="/static/Emilie-sound.m4a"
        ></audio>
      ) : (
        ""
      )}
    </div>
  );
};

export default AudioTimer;
