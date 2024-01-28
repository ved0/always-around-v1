import { useEffect, useRef, useState } from "react";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import VideoController from "./VideoController";

const VideoGallery = (props) => {
  const videoElements = useRef([]);
  const galleryRef = useRef(null);
  const [displayController, setDisplayController] = useState(false);
  const [timeOut, setTimeOut] = useState(null);
  const [paused, setPaused] = useState(true);
  const [indexOfCurrentPlayingVideo, setIndexOfCurrentPlayingVideo] =
    useState(0);
  const [videos, setVideos] = useState([]);

  function whatVideosToDisplay() {
    switch (props.category) {
      case "Alla videos":
        return "all";
        break;
      case "Good times":
        return "1";
        break;
      case "Hälsningar":
        return "2";
        break;
      default:
        return "";
    }
  }

  useEffect(() => {
    if (props.emilieMode && !paused) {
      window.scrollTo(0, 0);
      document.body.style.overflowY = "hidden";
      document.documentElement.requestFullscreen();
    } else {
      document.body.style.overflowY = "auto";
    }
    fetch("/api/videos?category=" + whatVideosToDisplay())
      .then((response) => response.json())
      .then((data) => setVideos(data))
      .catch((error) => console.error("Error fetching videos:", error));
  }, [props.emilieMode, paused]);

  const iAmPlayed = (index) => {
    if (props.emilieMode) {
      const currentVideo = videoElements.current[index];
      if (currentVideo.currentTime > 0) {
        currentVideo.currentTime = 0;
      }
      if (currentVideo) {
        currentVideo.play();
        currentVideo.className = "active";
        setIndexOfCurrentPlayingVideo(index);
        setDisplayController(true);
        setPaused(false);
      }
    } else {
      for (let i = 0; i < videoElements.current.length; i++) {
        if (!videoElements.current[i].paused && index != i) {
          videoElements.current[i].pause();
        }
      }
    }
  };

  const iAmPaused = (index) => {
    if (props.emilieMode) {
      setPaused(true);
      const currentVideo = videoElements.current[index];
      if (currentVideo) {
        if (currentVideo.duration == currentVideo.currentTime) {
          const timeout = setTimeout(() => {
            currentVideo.className = "";
            if (index + 1 == videoElements.current.length) {
              videoElements.current[0].className = "active";
              videoElements.current[0].play();
            } else {
              videoElements.current[index + 1].className = "active";
              videoElements.current[index + 1].play();
            }
          }, 10000);
          setTimeOut(timeout);
        }
      }
    }
  };

  const handleScroll = (direction) => {
    const scrollAmount = 200;
    const scrollDirection = direction === "up" ? -scrollAmount : scrollAmount;
    galleryRef.current.scrollBy({
      top: scrollDirection,
      behavior: "smooth",
    });
  };

  return (
    <div className="gallery-container">
      {displayController ? (
        <VideoController
          paused={paused}
          setPaused={setPaused}
          videoElements={videoElements}
          timeOut={timeOut}
          setIndexOfCurrentPlayingVideo={setIndexOfCurrentPlayingVideo}
          indexOfCurrentPlayingVideo={indexOfCurrentPlayingVideo}
          setDisplayController={setDisplayController}
        />
      ) : (
        ""
      )}
      <div className="video-gallery" ref={galleryRef}>
        {videos.map((item, index) => {
          return (
            <div className="video" key={index}>
              <video
                ref={(el) => (videoElements.current[index] = el)}
                onPlay={() => iAmPlayed(index)}
                onPause={() => iAmPaused(index)}
                src={item}
                controls
                controlsList={props.emilieMode ? "nofullscreen" : "default"}
              ></video>
            </div>
          );
        })}
      </div>
      <div className="scrolling">
        <div className="scroll-up" onClick={() => handleScroll("up")}>
          <FontAwesomeIcon icon={faArrowUp} />
        </div>
        <div className="scroll-down" onClick={() => handleScroll("down")}>
          <FontAwesomeIcon icon={faArrowDown} />
        </div>
      </div>
    </div>
  );
};
export default VideoGallery;
